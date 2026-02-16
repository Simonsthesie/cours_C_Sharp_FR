using System;

namespace Ex01_Variables;

/*
 * EXERCICE 1 - Les Variables
 * 
 * Objectif : Pratiquer la déclaration de variables et l'affichage.
 * 
 * Consignes :
 * 1. Déclare une variable "nom" (string) avec ton prénom
 * 2. Déclare une variable "age" (int) avec ton âge
 * 3. Affiche : "Je m'appelle [nom] et j'ai [age] ans."
 * 
 * Indice : Utilise Console.WriteLine() avec l'interpolation de chaîne :
 *          Console.WriteLine($"Mon texte {variable}");
 */



class Program
{
    int age = 25;
    string nom = "Alice";
    static void Main(string[] args)
    {
        // Écris ton code ici !
     
     Console.WriteLine($"Je m'appelle {nom} et j'ai {age} ans.");
    }
}
