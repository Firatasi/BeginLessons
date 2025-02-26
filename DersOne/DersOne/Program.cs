// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace DersOne
{
    class Program
    {
        static void Main(string[] args)
        {
            Matematik hesap = new Matematik();

            //sirala();
            //Disk();
            // hesap.faktoriyel(5);
            //hesap.asal(7);
           // Muko();

        }
        static void Disk()
        {
            int a = 0;
            int b = 0;
            int c = 0;
            int d = 0;

            double x, x1, x2 = 0;

            Console.Write("A sayısını giriniz:");
            a = Convert.ToInt32(Console.ReadLine());

            Console.Write("B sayısını giriniz:");
            b = Convert.ToInt32(Console.ReadLine());

            Console.Write("C sayısını giriniz:");
            c = Convert.ToInt32(Console.ReadLine());

            d = (b * b) - (4 * a * c);

            if (d < 0)
            {
                Console.WriteLine("Kök yok");
            }
            else if (d == 0)
            {
                x = (-b) / (2 * a);
                Console.WriteLine("Tek bir kök vardır, X değeri: " + x);
            }
            else
            {
                x1 = (-b) + Math.Sqrt(d) / (2 * a);
                x2 = (-b) - Math.Sqrt(d) / (2 * a);
                Console.WriteLine("X1 değeri: " + x1);
                Console.WriteLine("X2 değeri: " + x2);

            }
            Console.ReadKey();
        }

        static void sirala()
        {
            int sayi = 0;
            int EBS = 0;
            int EKS = 0;
            for (int i = 0; i < 10; i++)
            {
                Console.Write((i + 1).ToString() + ".Sayıyı giriniz: ");
                sayi = Convert.ToInt32(Console.ReadLine());

                if (i == 0)
                {
                    EBS = sayi;
                    EKS = sayi;

                }

                if (EBS < sayi) EBS = sayi;

                if (EKS > sayi) EKS = sayi;


            }
            Console.WriteLine("EBS= {0} EKS{1}", EBS, EKS);

        }
        public static void Muko()
        {
            while (true)
            {
                Console.Clear(); //sayfayı temizler

                int sayi;
                int t = 0;
                Console.SetCursorPosition(20, 4);

                Console.Write("Sayı giriniz:");
                sayi = Convert.ToInt32(Console.ReadLine());
                


                for (int i = 1; i < sayi; i++)
                {
                    if (sayi % i == 0)
                    {
                        t = t + i;
                    }

                }
                Console.SetCursorPosition(20, 5);

                if (sayi == t)
                {
                    Console.Write("Mükemmel sayıdır.");
                }
                else
                {
                    Console.Write("Mükemmel sayı değildir.");
                }




            }

        }




    }

        class Matematik
    {
        public int faktoriyel(int sayi)
        {
            for (int i = 1; i <= sayi; i++)
            {
                sayi *= i;
            }
            int sonuc = Convert.ToInt32(sayi);

            return sonuc;
        }

        public bool asal(int sayi)
        {
            int say = 0;
            for (int i = 1; i <= sayi; i++)
            {
                if (sayi % i == 0) say++;
            }
            if (say == 2) return true; return false;
        }
        public int harfsay(string cumle, string harf)
        {
            int say = 0;
            for (int i = 0; i < cumle.Length; i++)
            {
                if (cumle.Substring(i, 1).ToUpper() == harf.ToUpper()) say++;
            }

            return say;
        }
    }
}