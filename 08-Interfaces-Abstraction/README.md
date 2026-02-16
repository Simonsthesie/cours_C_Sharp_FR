# Module 08 - Interfaces et Abstraction

## Objectifs
- Définir et implémenter une interface
- Comprendre la différence entre interface et classe abstraite
- Utiliser les interfaces pour le découplage

---

## 1. Interface

```csharp
public interface IVolant
{
    void Voler();
}

public class Oiseau : IVolant
{
    public void Voler()
    {
        Console.WriteLine("L'oiseau s'envole !");
    }
}
```

---

## 2. Classe abstraite

```csharp
public abstract class Animal
{
    public abstract void Parler();
    
    public void Dormir()
    {
        Console.WriteLine("Zzz...");
    }
}

public class Chien : Animal
{
    public override void Parler() => Console.WriteLine("Wouf !");
}
```

---

## 3. Interface vs Classe abstraite

| Interface | Classe abstraite |
|-----------|------------------|
| Pas de code (sauf défaut) | Peut avoir du code |
| Héritage multiple | Héritage simple |
| Contrat pur | Classe de base partielle |
