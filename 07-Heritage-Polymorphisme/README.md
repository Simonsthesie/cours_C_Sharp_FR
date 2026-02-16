# Module 07 - Héritage et Polymorphisme

## Objectifs
- Faire hériter une classe d'une autre
- Comprendre override et virtual
- Utiliser le polymorphisme

---

## 1. Héritage

```csharp
public class Animal
{
    public string Nom;
    public void Manger() => Console.WriteLine("Miam");
}

public class Chien : Animal
{
    public void Aboyer() => Console.WriteLine("Wouf !");
}

Chien rex = new Chien();
rex.Nom = "Rex";
rex.Manger();   // Hérité
rex.Aboyer();   // Spécifique
```

---

## 2. override et virtual

```csharp
public class Animal
{
    public virtual void Parler()
    {
        Console.WriteLine("...");
    }
}

public class Chien : Animal
{
    public override void Parler()
    {
        Console.WriteLine("Wouf !");
    }
}
```

---

## 3. Polymorphisme

```csharp
Animal a = new Chien();
a.Parler();  // Affiche "Wouf !" car c'est un Chien
```

---

## 4. base (appeler la classe parente)

```csharp
public override void Parler()
{
    base.Parler();  // Appelle Animal.Parler()
    Console.WriteLine("En plus : Wouf !");
}
```
