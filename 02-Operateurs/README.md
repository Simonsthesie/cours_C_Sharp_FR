# Module 02 - Opérateurs et Expressions

## Objectifs
- Maîtriser les opérateurs arithmétiques
- Utiliser les opérateurs de comparaison
- Comprendre les opérateurs logiques (et, ou, non)

---

## 1. Opérateurs arithmétiques

| Opérateur | Signification | Exemple |
|-----------|---------------|---------|
| `+` | Addition | `5 + 3` → 8 |
| `-` | Soustraction | `5 - 3` → 2 |
| `*` | Multiplication | `5 * 3` → 15 |
| `/` | Division | `15 / 4` → 3 (int) ou 3.75 (double) |
| `%` | Modulo (reste) | `15 % 4` → 3 |

---

## 2. Opérateurs de comparaison

Résultent en `bool` (true ou false) :

| Opérateur | Signification |
|-----------|---------------|
| `==` | Égal à |
| `!=` | Différent de |
| `>` | Supérieur à |
| `<` | Inférieur à |
| `>=` | Supérieur ou égal |
| `<=` | Inférieur ou égal |

---

## 3. Opérateurs logiques

| Opérateur | Signification | Exemple |
|-----------|---------------|---------|
| `&&` | ET | `age > 18 && age < 65` |
| `\|\|` | OU | `estEtudiant \|\| estRetraite` |
| `!` | NON | `!estFerme` |

---

## 4. Opérateurs d'incrémentation

```csharp
int x = 5;
x++;   // x devient 6 (post-incrémentation)
++x;   // x devient 7 (pré-incrémentation)
x--;   // x devient 6 (décrémentation)
```
