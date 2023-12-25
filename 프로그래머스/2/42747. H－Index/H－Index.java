import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

class Solution {
    public int solution(int[] citations) {
        int count = 0;
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i = 1; i<=citations.length; i++){
            list.add(i);
        }
        Integer[] integrtArr = Arrays.stream( citations ).boxed().toArray(Integer[] :: new);
        Arrays.sort(integrtArr ,Collections.reverseOrder());

        for(int i=0; i<integrtArr.length; i++){
           if(integrtArr[i] >= list.get(i) ) count++;
           else return count;               
        }
        return count;
    }
}