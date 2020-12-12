import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class Part2{
    public static void main(String [] args) throws FileNotFoundException{
        File file = new File("input");
        Scanner sc = new Scanner(file);
        int count = 0;
        while(sc.hasNextLine()){
            String line = sc.nextLine();
            // String format
            // <low>-<high> <character>: <string>
            int pos1 = Integer.parseInt(line.substring(0,line.indexOf('-')));
            int pos2 = Integer.parseInt(line.substring(line.indexOf('-')+1,line.indexOf(' ')));
            char character = line.charAt(line.indexOf(' ')+1);
            String remainingString = line.substring(line.lastIndexOf(' ')+1);

            char charA = remainingString.charAt(pos1-1);
            char charB = remainingString.charAt(pos2-1);

            if((charA == character && charB == character)||(charA != character && charB != character))
                continue;
            else
                ++count;
        }
        System.out.println(count);
        sc.close();
    }
}