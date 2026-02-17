(function() {
  const JUDGE0_URL = 'https://ce.judge0.com';
  const CSHARP_LANG_ID = 51;

  function initRunner(container) {
    const codeEl = container.querySelector('.csharp-code');
    const btn = container.querySelector('.btn-run');
    const stdinEl = container.querySelector('.csharp-stdin');
    const statusEl = container.querySelector('.run-status');
    const outputEl = container.querySelector('.run-output');
    const resultEl = container.querySelector('.run-result');
    const errorEl = container.querySelector('.run-error');

    if (!btn || !codeEl) return;

    btn.addEventListener('click', async function() {
      const code = codeEl.value;
      if (!code.trim()) return;
      const stdin = stdinEl ? stdinEl.value : '';

      btn.disabled = true;
      if (statusEl) statusEl.textContent = 'Exécution en cours…';
      if (outputEl) outputEl.style.display = 'block';
      if (resultEl) resultEl.textContent = '';
      if (errorEl) {
        errorEl.style.display = 'none';
        errorEl.textContent = '';
      }

      try {
        const res = await fetch(JUDGE0_URL + '/submissions?base64_encoded=false&wait=true', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source_code: code,
            language_id: CSHARP_LANG_ID,
            stdin: stdin
          })
        });
        const data = await res.json();

        if (data.token && !data.stdout && !data.stderr && !data.compile_output && (!data.status || data.status.id <= 2)) {
          if (statusEl) statusEl.textContent = 'En attente…';
          let attempts = 0;
          const maxAttempts = 20;
          const poll = async () => {
            const r = await fetch(JUDGE0_URL + '/submissions/' + data.token + '?base64_encoded=false');
            const d = await r.json();
            if (d.status && d.status.id > 2 || ++attempts >= maxAttempts) {
              afficherResultat(d);
              btn.disabled = false;
              if (statusEl) statusEl.textContent = '';
              return;
            }
            setTimeout(poll, 600);
          };
          setTimeout(poll, 800);
          return;
        }

        afficherResultat(data);
      } catch (err) {
        if (resultEl) resultEl.textContent = '(Aucun résultat)';
        if (errorEl) {
          errorEl.textContent = 'Erreur : ' + err.message + '. Lance un serveur local (npx serve .) ou utilise .NET Fiddle.';
          errorEl.style.display = 'block';
        }
      }
      btn.disabled = false;
      if (statusEl) statusEl.textContent = '';
    });

    function afficherResultat(data) {
      const stdout = data.stdout || '';
      const stderr = data.stderr || '';
      const compile = data.compile_output || '';
      const status = data.status ? (data.status.description || '') : '';

      let out = '';
      if (stdout) out += stdout;
      if (stderr) out += (out ? '\n' : '') + '(stderr) ' + stderr;
      if (compile) out += (out ? '\n' : '') + '(compilation) ' + compile;
      if (!out && status) out = 'Statut : ' + status;

      if (resultEl) resultEl.textContent = out || '(Pas de sortie)';

      const errId = data.status && data.status.id ? data.status.id : 0;
      if (errorEl && errId >= 6 && errId !== 3) {
        errorEl.innerHTML = 'Consulte <a href="erreurs-courantes.html">Erreurs courantes</a> pour des indices.';
        errorEl.style.display = 'block';
      }
    }
  }

  document.querySelectorAll('.code-runner').forEach(initRunner);
})();
