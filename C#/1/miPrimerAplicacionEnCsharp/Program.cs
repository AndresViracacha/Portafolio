using System;

namespace miPrimerAplicacionEnCsharp
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Que pasa Perros");
            //Console.WriteLine("Jejejejej");
            //Hola Amigo
            /*
             para hacer comentarios se puede usar ctrl+c, ctrl+u
             */
            Console.WriteLine(calcularArea(5));
            double calcularArea(double radio){
                double area;
                area = Math.Pow(radio, 2) * Math.PI;
                return area;
            }

        }
    }
}
