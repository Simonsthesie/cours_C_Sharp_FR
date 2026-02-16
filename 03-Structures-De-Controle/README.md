# Module 03 - Structures de Contrôle

## Objectifs
- Utiliser if / else pour les conditions
- Maîtriser le switch
- Faire des boucles (for, while, foreach)

---

## 1. if / else if / else

```csharp
if (age >= 18)
{
    Console.WriteLine("Tu es majeur.");
}
else if (age >= 12)
{
    Console.WriteLine("Tu es ado.");
}
else
{
    Console.WriteLine("Tu es enfant.");
}
```

---

## 2. switch

```csharp
switch (note)
{
    case 10:
        Console.WriteLine("Passable");
        break;
    case 15:
        Console.WriteLine("Bien !");
        break;
    default:
        Console.WriteLine("Autre");
        break;
}
```

---

## 3. Boucle for

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);  // 0, 1, 2, 3, 4
}
```

---

## 4. Boucle while

```csharp
int compteur = 0;
while (compteur < 5)
{
    Console.WriteLine(compteur);
    compteur++;
}
```

---

## 5. foreach

```csharp
string[] noms = { "Alice", "Bob", "Charlie" };
foreach (string nom in noms)
{
    Console.WriteLine(nom);
}
```
