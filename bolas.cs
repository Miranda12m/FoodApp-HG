using System;

class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
    public void Introduce()
    {
        Console.WriteLine($"Hello, my name is {FirstName} {LastName}.");
    }
}

class Program
{
    static void Main()
    {
        Person person = new Person("John", "Doe");
        Console.WriteLine($"First Name: {person.FirstName}");
        Console.WriteLine($"Last Name: {person.LastName}");
        person.Introduce();
    }
}
