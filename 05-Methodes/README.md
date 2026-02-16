# Module 05 - Méthodes et Paramètres

## Objectifs
- Déclarer et appeler des méthodes
- Utiliser des paramètres et valeurs de retour
- Comprendre la portée des variables

---

## 1. Méthode simple

```csharp
void DireBonjour()
{
    Console.WriteLine("Bonjour !");
}

// Appel
DireBonjour();
```

---

## 2. Méthode avec paramètres

```csharp
void Saluer(string nom)
{
    Console.WriteLine($"Bonjour {nom} !");
}

Saluer("Alice");
```

---

## 3. Méthode avec retour

```csharp
int Additionner(int a, int b)
{
    return a + b;
}

int resultat = Additionner(5, 3);  // 8
```

---

## 4. Paramètres optionnels

```csharp
void Afficher(string msg, int fois = 1)
{
    for (int i = 0; i < fois; i++)
        Console.WriteLine(msg);
}
```
