# Module 09 - Gestion des Exceptions

## Objectifs
- Utiliser try / catch pour gérer les erreurs
- Connaître les exceptions courantes
- Utiliser finally

---

## 1. try / catch

```csharp
try
{
    int nombre = int.Parse("abc");  // Lève FormatException
}
catch (FormatException ex)
{
    Console.WriteLine("Erreur : " + ex.Message);
}
```

---

## 2. catch multiples

```csharp
catch (FormatException ex)
{
    Console.WriteLine("Format invalide");
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Division par zéro");
}
catch (Exception ex)
{
    Console.WriteLine("Autre erreur : " + ex.Message);
}
```

---

## 3. finally

```csharp
try
{
    // Code
}
catch (Exception ex)
{
    // Gestion
}
finally
{
    // Toujours exécuté (fermeture fichier, etc.)
}
```

---

## 4. Lancer une exception

```csharp
if (age < 0)
    throw new ArgumentException("L'âge ne peut pas être négatif");
```
