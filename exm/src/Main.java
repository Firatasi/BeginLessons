import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {


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

}

