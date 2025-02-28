import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.LinkedHashSet;
import java.util.TreeSet;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {


        SerialTest();

        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(10);
        numbers.add(1022);
        numbers.add(1);
        numbers.add(-10);
        numbers.add(22);
        for (Integer number : numbers) {
            System.out.println(number);
        }


        LinkedHashSet<String> days = new LinkedHashSet<>();
        days.add("Pazartesi");
        days.add("Salı");
        days.add("Çarşamba");
        days.add("Perşembe");
        days.add("Cuma");
        days.add("Cumartesi");
        days.add("Pazar");

        days.remove("Pazar");

        for (String day : days) {
            System.out.println(day);

        }

        File dosya = new File("OrnekDosya.txt");
        try {
            if (dosya.createNewFile()) {
                System.out.println(dosya.getName() + " Dosya oluşturuldu! ");
            }else {
                System.out.println(dosya.getName() + " Dosya zaten mevcut! ");
            }
        }catch (IOException e) {

        }

        try {
            FileInputStream input = new FileInputStream(dosya);
            //System.out.println(input.read()); //ilk elemanın byte değerini döner
            int i = input.read();
            while (i != -1) {
                System.out.print((char) i);
                i = input.read();//chara dönüştürerek veriyi yazar
            }
        }catch (Exception e) {
            System.out.println(e.getMessage());
        }






    }
    public static void SerialTest() {
        try {
            Car car = new Car("Hyundai", "Getz");
            FileOutputStream file = new FileOutputStream("output.txt");
            ObjectOutputStream write = new ObjectOutputStream(file);        write.writeObject(car);


            FileInputStream fileIn = new FileInputStream("output.txt");
            ObjectInputStream read = new ObjectInputStream(fileIn);
// Reads the objects
            Car newCar = (Car) read.readObject();

            System.out.println("Car Brand : " + newCar.getBrand());
            System.out.println("Car Model: " + newCar.getModel());
            read.close();
            write.close();
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    Car o1 = new Car("a", "b");
    public static void tipDonusum() {
        int myInt = 3;
        double myDouble = myInt; // Otomatik Dönüştürme : int => double

        System.out.println(myInt);      // Çıktısı 3
        System.out.println(myDouble);   // Çıktısı 3.0

        double a = 3.78;
        int b = (int) myDouble; // Manuel Dönüştürme : double => int

        System.out.println(myDouble);   // Çıktısı 3.78
        System.out.println(myInt);      // Çıktısı 3

        int num = 10;
        System.out.println("Integer değer : " + num);

        String data = String.valueOf(num);
        System.out.println("String Değer : " + data);

        String d = "15";
        System.out.println("String Değer : " + data);

        int f = Integer.parseInt(data);
        System.out.println("Integer Değer : " + num);
    }

    //tipDonusum();


}

