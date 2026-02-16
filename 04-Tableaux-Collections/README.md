# Module 04 - Tableaux et Collections

## Objectifs
- Créer et manipuler des tableaux
- Utiliser les listes (List<T>)
- Parcourir les collections avec foreach

---

## 1. Tableaux (array)

```csharp
// Déclaration et initialisation
int[] nombres = { 1, 2, 3, 4, 5 };
string[] noms = new string[3];  // 3 cases vides

// Accès
nombres[0] = 10;      // Premier élément
int len = nombres.Length;  // Taille

// Parcours
foreach (int n in nombres)
    Console.WriteLine(n);
```

---

## 2. List<T> (liste dynamique)

```csharp
using System.Collections.Generic;

List<string> fruits = new List<string>();
fruits.Add("Pomme");
fruits.Add("Banane");
fruits.Remove("Pomme");
int count = fruits.Count;
```

---

## 3. Tableau à deux dimensions

```csharp
int[,] grille = new int[3, 3];
grille[0, 0] = 1;
```
