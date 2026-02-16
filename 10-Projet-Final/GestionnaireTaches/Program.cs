using System;
using System.Collections.Generic;

/*
 * PROJET FINAL - Gestionnaire de tâches
 * 
 * Structure de base fournie. À toi de compléter les méthodes !
 * 
 * Voir le README.md du module 10 pour les consignes détaillées.
 */

class Tache
{
    public string Titre { get; set; } = "";
    public bool EstTerminee { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        List<Tache> taches = new List<Tache>();
        
        while (true)
        {
            AfficherMenu();
            string choix = Console.ReadLine() ?? "";
            
            switch (choix)
            {
                case "1":
                    AjouterTache(taches);
                    break;
                case "2":
                    MarquerTerminee(taches);
                    break;
                case "3":
                    AfficherTaches(taches);
                    break;
                case "4":
                    Console.WriteLine("Au revoir !");
                    return;
                default:
                    Console.WriteLine("Choix invalide.");
                    break;
            }
        }
    }
    
    static void AfficherMenu()
    {
        Console.WriteLine("\n--- Ma To-Do List ---");
        Console.WriteLine("1 = Ajouter une tâche");
        Console.WriteLine("2 = Marquer comme terminée");
        Console.WriteLine("3 = Afficher les tâches");
        Console.WriteLine("4 = Quitter");
        Console.Write("Choix : ");
    }
    
    static void AjouterTache(List<Tache> taches)
    {
        // TODO : Demander le titre et ajouter à la liste
        Console.WriteLine("Fonction à implémenter !");
    }
    
    static void MarquerTerminee(List<Tache> taches)
    {
        // TODO : Afficher la liste, demander le numéro, marquer
        Console.WriteLine("Fonction à implémenter !");
    }
    
    static void AfficherTaches(List<Tache> taches)
    {
        // TODO : Afficher avec [ ] ou [X]
        Console.WriteLine("Fonction à implémenter !");
    }
}
