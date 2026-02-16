# Module 06 - Introduction à la POO (Programmation Orientée Objet)

## Objectifs
- Créer une classe
- Définir des attributs (champs) et des méthodes
- Instancier des objets avec `new`

---

## 1. Définir une classe

```csharp
public class Voiture
{
    public string Marque;
    public string Couleur;
    
    public void Klaxonner()
    {
        Console.WriteLine("Tut tut !");
    }
}
```

---

## 2. Créer un objet

```csharp
Voiture maVoiture = new Voiture();
maVoiture.Marque = "Renault";
maVoiture.Couleur = "Rouge";
maVoiture.Klaxonner();
```

---

## 3. Constructeur

```csharp
public class Voiture
{
    public string Marque;
    
    public Voiture(string marque)
    {
        Marque = marque;
    }
}

Voiture v = new Voiture("Peugeot");
```

---

## 4. Propriétés (get/set)

```csharp
private int _vitesse;

public int Vitesse
{
    get { return _vitesse; }
    set { _vitesse = value; }
}
```
