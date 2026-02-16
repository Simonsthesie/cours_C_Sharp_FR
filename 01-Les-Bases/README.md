# Module 01 - Les Bases : Variables et Types

## Objectifs
- Comprendre la structure d'un programme C#
- Déclarer et utiliser des variables
- Connaître les types de données de base

---

## 1. Structure d'un programme C#

```csharp
using System;  // Pour utiliser Console, etc.

namespace MonProgramme
{
    class Program
    {
        static void Main(string[] args)
        {
            // Ton code ici !
            Console.WriteLine("Bonjour !");
        }
    }
}
```

- **namespace** : regroupe ton code
- **class Program** : le point d'entrée
- **Main** : la méthode qui s'exécute au démarrage

---

## 2. Les types de données

| Type C# | Description | Exemple |
|---------|-------------|---------|
| `int` | Nombre entier | `42` |
| `double` | Nombre décimal | `3.14` |
| `float` | Décimal (précision moindre) | `3.14f` |
| `bool` | Vrai ou Faux | `true` |
| `char` | Un seul caractère | `'A'` |
| `string` | Texte | `"Bonjour"` |

---

## 3. Déclarer une variable

```csharp
int age = 25;
string nom = "Alice";
double prix = 19.99;

// Déclaration sans valeur initiale
int nombre;
nombre = 10;
```

---

## 4. Afficher et lire

```csharp
// Afficher
Console.WriteLine("Texte");      // Avec retour à la ligne
Console.Write("Texte");          // Sans retour à la ligne

// Lire
string saisie = Console.ReadLine();  // Lit du texte
```

---

## 📝 Exercices

Fais les exercices dans `Ex01-Variables.cs` et `Ex02-CalculSimple.cs` !
