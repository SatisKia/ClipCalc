var extFuncData = new Array();
var extFuncFile2 = new Array();
var extFuncData2 = new Array();
var COLOR_WIN = [
 0x000000, 0x000080, 0x008000, 0x008080, 0x800000, 0x800080, 0x808000, 0x808080,
 0xC0DCC0, 0xF0CAA6,
                     0xAA3F2A, 0xFF3F2A, 0x005F2A, 0x555F2A, 0xAA5F2A, 0xFF5F2A,
 0x007F2A, 0x557F2A, 0xAA7F2A, 0xFF7F2A, 0x009F2A, 0x559F2A, 0xAA9F2A, 0xFF9F2A,
 0x00BF2A, 0x55BF2A, 0xAABF2A, 0xFFBF2A, 0x00DF2A, 0x55DF2A, 0xAADF2A, 0xFFDF2A,
 0x00FF2A, 0x55FF2A, 0xAAFF2A, 0xFFFF2A,

 0x000055, 0x550055, 0xAA0055, 0xFF0055, 0x001F55, 0x551F55, 0xAA1F55, 0xFF1F55,
 0x003F55, 0x553F55, 0xAA3F55, 0xFF3F55, 0x005F55, 0x555F55, 0xAA5F55, 0xFF5F55,
 0x007F55, 0x557F55, 0xAA7F55, 0xFF7F55, 0x009F55, 0x559F55, 0xAA9F55, 0xFF9F55,
 0x00BF55, 0x55BF55, 0xAABF55, 0xFFBF55, 0x00DF55, 0x55DF55, 0xAADF55, 0xFFDF55,
 0x00FF55, 0x55FF55, 0xAAFF55, 0xFFFF55,

 0x00007F, 0x55007F, 0xAA007F, 0xFF007F, 0x001F7F, 0x551F7F, 0xAA1F7F, 0xFF1F7F,
 0x003F7F, 0x553F7F, 0xAA3F7F, 0xFF3F7F, 0x005F7F, 0x555F7F, 0xAA5F7F, 0xFF5F7F,
 0x007F7F, 0x557F7F, 0xAA7F7F, 0xFF7F7F, 0x009F7F, 0x559F7F, 0xAA9F7F, 0xFF9F7F,
 0x00BF7F, 0x55BF7F, 0xAABF7F, 0xFFBF7F, 0x00DF7F, 0x55DF7F, 0xAADF7F, 0xFFDF7F,
 0x00FF7F, 0x55FF7F, 0xAAFF7F, 0xFFFF7F,

 0x0000AA, 0x5500AA, 0xAA00AA, 0xFF00AA, 0x001FAA, 0x551FAA, 0xAA1FAA, 0xFF1FAA,
 0x003FAA, 0x553FAA, 0xAA3FAA, 0xFF3FAA, 0x005FAA, 0x555FAA, 0xAA5FAA, 0xFF5FAA,
 0x007FAA, 0x557FAA, 0xAA7FAA, 0xFF7FAA, 0x009FAA, 0x559FAA, 0xAA9FAA, 0xFF9FAA,
 0x00BFAA, 0x55BFAA, 0xAABFAA, 0xFFBFAA, 0x00DFAA, 0x55DFAA, 0xAADFAA, 0xFFDFAA,
 0x00FFAA, 0x55FFAA, 0xAAFFAA, 0xFFFFAA,

 0x0000D4, 0x5500D4, 0xAA00D4, 0xFF00D4, 0x001FD4, 0x551FD4, 0xAA1FD4, 0xFF1FD4,
 0x003FD4, 0x553FD4, 0xAA3FD4, 0xFF3FD4, 0x005FD4, 0x555FD4, 0xAA5FD4, 0xFF5FD4,
 0x007FD4, 0x557FD4, 0xAA7FD4, 0xFF7FD4, 0x009FD4, 0x559FD4, 0xAA9FD4, 0xFF9FD4,
 0x00BFD4, 0x55BFD4, 0xAABFD4, 0xFFBFD4, 0x00DFD4, 0x55DFD4, 0xAADFD4, 0xFFDFD4,
 0x00FFD4, 0x55FFD4, 0xAAFFD4, 0xFFFFD4,

           0x5500FF, 0xAA00FF, 0x001FFF, 0x551FFF, 0xAA1FFF, 0xFF1FFF,
 0x003FFF, 0x553FFF, 0xAA3FFF, 0xFF3FFF, 0x005FFF, 0x555FFF, 0xAA5FFF, 0xFF5FFF,
 0x007FFF, 0x557FFF, 0xAA7FFF, 0xFF7FFF, 0x009FFF, 0x559FFF, 0xAA9FFF, 0xFF9FFF,
 0x00BFFF, 0x55BFFF, 0xAABFFF, 0xFFBFFF, 0x00DFFF, 0x55DFFF, 0xAADFFF, 0xFFDFFF,
           0x55FFFF, 0xAAFFFF,

 0xFFCCCC, 0xFFCCFF, 0xFFFF33, 0xFFFF66, 0xFFFF99, 0xFFFFCC,

 0x007F00, 0x557F00, 0xAA7F00, 0xFF7F00, 0x009F00, 0x559F00, 0xAA9F00, 0xFF9F00,
 0x00BF00, 0x55BF00, 0xAABF00, 0xFFBF00, 0x00DF00, 0x55DF00, 0xAADF00, 0xFFDF00,
           0x55FF00, 0xAAFF00,

 0x00002A, 0x55002A, 0xAA002A, 0xFF002A, 0x001F2A, 0x551F2A, 0xAA1F2A, 0xFF1F2A,
 0x003F2A, 0x553F2A,

                                                             0xF0FBFF, 0xA4A0A0,
 0xC0C0C0, 0x0000FF, 0x00FF00, 0x00FFFF, 0xFF0000, 0xFF00FF, 0xFFFF00, 0xFFFFFF

];
function regGWorldDefCharInfo( i ){
 newGWorldCharInfo( i );
 regGWorldCharInfo( i, _CHAR( '0' ), 5, 7, 1, 4, 7, "011010011001100110011001011" );
 regGWorldCharInfo( i, _CHAR( '1' ), 4, 7, 1, 2, 7, "01110101010101" );
 regGWorldCharInfo( i, _CHAR( '2' ), 5, 7, 1, 4, 7, "0110100100010010010010001111" );
 regGWorldCharInfo( i, _CHAR( '3' ), 5, 7, 1, 4, 7, "011010010001001000011001011" );
 regGWorldCharInfo( i, _CHAR( '4' ), 5, 7, 1, 4, 7, "001001101010101011110010001" );
 regGWorldCharInfo( i, _CHAR( '5' ), 5, 7, 1, 4, 7, "111110001110100100011001011" );
 regGWorldCharInfo( i, _CHAR( '6' ), 5, 7, 1, 4, 7, "011010011000111010011001011" );
 regGWorldCharInfo( i, _CHAR( '7' ), 5, 7, 1, 4, 7, "11110001000100100010010001" );
 regGWorldCharInfo( i, _CHAR( '8' ), 5, 7, 1, 4, 7, "011010011001011010011001011" );
 regGWorldCharInfo( i, _CHAR( '9' ), 5, 7, 1, 4, 7, "011010011001011100011001011" );
 regGWorldCharInfo( i, _CHAR( 'A' ), 5, 7, 1, 4, 7, "0110100110011111100110011001" );
 regGWorldCharInfo( i, _CHAR( 'B' ), 5, 7, 1, 4, 7, "111010011001111010011001111" );
 regGWorldCharInfo( i, _CHAR( 'C' ), 5, 7, 1, 4, 7, "011010011000100010001001011" );
 regGWorldCharInfo( i, _CHAR( 'D' ), 5, 7, 1, 4, 7, "111010011001100110011001111" );
 regGWorldCharInfo( i, _CHAR( 'E' ), 5, 7, 1, 4, 7, "1111100010001111100010001111" );
 regGWorldCharInfo( i, _CHAR( 'F' ), 5, 7, 1, 4, 7, "1111100010001111100010001" );
 regGWorldCharInfo( i, _CHAR( 'G' ), 5, 7, 1, 4, 7, "011010011000101110011001011" );
 regGWorldCharInfo( i, _CHAR( 'H' ), 5, 7, 1, 4, 7, "1001100110011111100110011001" );
 regGWorldCharInfo( i, _CHAR( 'I' ), 4, 7, 1, 3, 7, "111010010010010010111" );
 regGWorldCharInfo( i, _CHAR( 'J' ), 5, 7, 1, 4, 7, "000100010001000100011001011" );
 regGWorldCharInfo( i, _CHAR( 'K' ), 5, 7, 1, 4, 7, "1001100110101100101010011001" );
 regGWorldCharInfo( i, _CHAR( 'L' ), 5, 7, 1, 4, 7, "1000100010001000100010001111" );
 regGWorldCharInfo( i, _CHAR( 'M' ), 6, 7, 1, 5, 7, "10001100011101111011101011010110101" );
 regGWorldCharInfo( i, _CHAR( 'N' ), 5, 7, 1, 4, 7, "1001110111011011101110011001" );
 regGWorldCharInfo( i, _CHAR( 'O' ), 5, 7, 1, 4, 7, "011010011001100110011001011" );
 regGWorldCharInfo( i, _CHAR( 'P' ), 5, 7, 1, 4, 7, "1110100110011110100010001" );
 regGWorldCharInfo( i, _CHAR( 'Q' ), 5, 7, 1, 4, 7, "0110100110011101101110110111" );
 regGWorldCharInfo( i, _CHAR( 'R' ), 5, 7, 1, 4, 7, "1110100110011110100110011001" );
 regGWorldCharInfo( i, _CHAR( 'S' ), 5, 7, 1, 4, 7, "011010011000011000011001011" );
 regGWorldCharInfo( i, _CHAR( 'T' ), 5, 7, 1, 4, 7, "111100100010001000100010001" );
 regGWorldCharInfo( i, _CHAR( 'U' ), 5, 7, 1, 4, 7, "100110011001100110011001011" );
 regGWorldCharInfo( i, _CHAR( 'V' ), 5, 7, 1, 4, 7, "100110011001010101010010001" );
 regGWorldCharInfo( i, _CHAR( 'W' ), 6, 7, 1, 5, 7, "1010110101101011010101010010100101" );
 regGWorldCharInfo( i, _CHAR( 'X' ), 5, 7, 1, 4, 7, "1001100110010110100110011001" );
 regGWorldCharInfo( i, _CHAR( 'Y' ), 5, 7, 1, 4, 7, "100110011001010100100010001" );
 regGWorldCharInfo( i, _CHAR( 'Z' ), 5, 7, 1, 4, 7, "1111000100100100100010001111" );
 regGWorldCharInfo( i, _CHAR( 'a' ), 5, 7, 1, 4, 5, "01100001011110010111" );
 regGWorldCharInfo( i, _CHAR( 'b' ), 5, 7, 1, 4, 7, "100010001110100110011001111" );
 regGWorldCharInfo( i, _CHAR( 'c' ), 5, 7, 1, 4, 5, "0110100110001001011" );
 regGWorldCharInfo( i, _CHAR( 'd' ), 5, 7, 1, 4, 7, "0001000101111001100110010111" );
 regGWorldCharInfo( i, _CHAR( 'e' ), 5, 7, 1, 4, 5, "01101001111110000111" );
 regGWorldCharInfo( i, _CHAR( 'f' ), 4, 7, 1, 3, 7, "00101011101001001001" );
 regGWorldCharInfo( i, _CHAR( 'g' ), 5, 7, 1, 4, 5, "01111001100101110001111" );
 regGWorldCharInfo( i, _CHAR( 'h' ), 5, 7, 1, 4, 7, "1000100011101001100110011001" );
 regGWorldCharInfo( i, _CHAR( 'i' ), 3, 7, 1, 1, 7, "1011111" );
 regGWorldCharInfo( i, _CHAR( 'j' ), 4, 7, 1, 2, 7, "010001010101011" );
 regGWorldCharInfo( i, _CHAR( 'k' ), 5, 7, 1, 4, 7, "1000100010011010110010101001" );
 regGWorldCharInfo( i, _CHAR( 'l' ), 3, 7, 1, 1, 7, "1111111" );
 regGWorldCharInfo( i, _CHAR( 'm' ), 6, 7, 1, 5, 5, "1101010101101011010110101" );
 regGWorldCharInfo( i, _CHAR( 'n' ), 5, 7, 1, 4, 5, "11101001100110011001" );
 regGWorldCharInfo( i, _CHAR( 'o' ), 5, 7, 1, 4, 5, "0110100110011001011" );
 regGWorldCharInfo( i, _CHAR( 'p' ), 5, 7, 1, 4, 5, "111010011001111010001" );
 regGWorldCharInfo( i, _CHAR( 'q' ), 5, 7, 1, 4, 5, "011110011001011100010001" );
 regGWorldCharInfo( i, _CHAR( 'r' ), 5, 7, 1, 4, 5, "10111100100010001" );
 regGWorldCharInfo( i, _CHAR( 's' ), 5, 7, 1, 4, 5, "0111100001100001111" );
 regGWorldCharInfo( i, _CHAR( 't' ), 4, 7, 1, 3, 6, "010111010010010001" );
 regGWorldCharInfo( i, _CHAR( 'u' ), 5, 7, 1, 4, 5, "10011001100110010111" );
 regGWorldCharInfo( i, _CHAR( 'v' ), 5, 7, 1, 4, 5, "1001100101010101001" );
 regGWorldCharInfo( i, _CHAR( 'w' ), 6, 7, 1, 5, 5, "101011010110101010100101" );
 regGWorldCharInfo( i, _CHAR( 'x' ), 5, 7, 1, 4, 5, "10011001011010011001" );
 regGWorldCharInfo( i, _CHAR( 'y' ), 5, 7, 1, 4, 5, "10011001100101110001111" );
 regGWorldCharInfo( i, _CHAR( 'z' ), 5, 7, 1, 4, 5, "11110001011010001111" );
 regGWorldCharInfo( i, _CHAR( ' ' ), 5, 7, 1, 4, 7, "" );
 regGWorldCharInfo( i, _CHAR( '!' ), 2, 7, 1, 1, 7, "1111101" );
 regGWorldCharInfo( i, _CHAR( '"' ), 5, 7, 1, 4, 7, "01010101101" );
 regGWorldCharInfo( i, _CHAR( '#' ), 6, 7, 1, 5, 7, "0101011111010100101001010111110101" );
 regGWorldCharInfo( i, _CHAR( '$' ), 6, 7, 1, 5, 7, "001000111110100011100010111110001" );
 regGWorldCharInfo( i, _CHAR( '%' ), 6, 7, 1, 5, 7, "0100110110010100010001010011011001" );
 regGWorldCharInfo( i, _CHAR( '&' ), 6, 7, 1, 5, 7, "01100100100110010101101011001001101" );
 regGWorldCharInfo( i, _CHAR( '\'' ), 3, 7, 1, 2, 7, "01011" );
 regGWorldCharInfo( i, _CHAR( '(' ), 4, 7, 1, 3, 7, "001010100100100010001" );
 regGWorldCharInfo( i, _CHAR( ')' ), 4, 7, 1, 3, 7, "1000100010010010101" );
 regGWorldCharInfo( i, _CHAR( '*' ), 6, 7, 1, 5, 6, "00100101010111010101001" );
 regGWorldCharInfo( i, _CHAR( '+' ), 4, 7, 1, 3, 6, "01001011101001" );
 regGWorldCharInfo( i, _CHAR( ',' ), 3, 7, 1, 2, 2, "01011" );
 regGWorldCharInfo( i, _CHAR( '-' ), 4, 7, 1, 3, 4, "111" );
 regGWorldCharInfo( i, _CHAR( '.' ), 2, 7, 1, 1, 1, "1" );
 regGWorldCharInfo( i, _CHAR( '/' ), 6, 7, 1, 5, 7, "0000100010000100010001000010001" );
 regGWorldCharInfo( i, _CHAR( ':' ), 2, 7, 1, 1, 5, "1001" );
 regGWorldCharInfo( i, _CHAR( ';' ), 3, 7, 1, 2, 5, "010000011" );
 regGWorldCharInfo( i, _CHAR( '<' ), 5, 7, 1, 4, 7, "0001001001001000010000100001" );
 regGWorldCharInfo( i, _CHAR( '=' ), 4, 7, 1, 3, 5, "111000000111" );
 regGWorldCharInfo( i, _CHAR( '>' ), 5, 7, 1, 4, 7, "1000010000100001001001001" );
 regGWorldCharInfo( i, _CHAR( '?' ), 5, 7, 1, 4, 7, "01101001001001000100000001" );
 regGWorldCharInfo( i, _CHAR( '@' ), 6, 7, 1, 5, 7, "0111010001111011010111110100000111" );
 regGWorldCharInfo( i, _CHAR( '[' ), 4, 7, 1, 3, 7, "111100100100100100111" );
 regGWorldCharInfo( i, _CHAR( '\\' ), 6, 7, 1, 5, 7, "100010101011111001001111100100001" );
 regGWorldCharInfo( i, _CHAR( ']' ), 4, 7, 1, 3, 7, "111001001001001001111" );
 regGWorldCharInfo( i, _CHAR( '^' ), 4, 7, 1, 3, 7, "010101" );
 regGWorldCharInfo( i, _CHAR( '_' ), 5, 7, 1, 4, 1, "1111" );
 regGWorldCharInfo( i, _CHAR( '`' ), 3, 7, 1, 2, 7, "101001" );
 regGWorldCharInfo( i, _CHAR( '{' ), 4, 7, 1, 3, 7, "011010010100010010011" );
 regGWorldCharInfo( i, _CHAR( '|' ), 2, 7, 1, 1, 7, "1111111" );
 regGWorldCharInfo( i, _CHAR( '}' ), 4, 7, 1, 3, 7, "11001001000101001011" );
 regGWorldCharInfo( i, _CHAR( '~' ), 5, 7, 1, 4, 7, "0101101" );
}
function regGWorldDefCharInfoLarge( i ){
 newGWorldCharInfo( i );
 regGWorldCharInfo( i, _CHAR( '0' ), 11, 12, 4, 10, 11,
  "0001110000" +
  "0010001000" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0010001000" +
  "0001110000"
  );
 regGWorldCharInfo( i, _CHAR( '1' ), 11, 12, 4, 10, 11,
  "0000110000" +
  "0011010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0011111110"
  );
 regGWorldCharInfo( i, _CHAR( '2' ), 11, 12, 4, 10, 11,
  "0001111000" +
  "0010000100" +
  "0100000010" +
  "0000000010" +
  "0000000100" +
  "0000001000" +
  "0000010000" +
  "0000100000" +
  "0001000000" +
  "0010000010" +
  "0111111110"
  );
 regGWorldCharInfo( i, _CHAR( '3' ), 11, 12, 4, 10, 11,
  "0001111000" +
  "0010000100" +
  "0000000100" +
  "0000000100" +
  "0000111000" +
  "0000000100" +
  "0000000010" +
  "0000000010" +
  "0000000010" +
  "0100000100" +
  "0011111000"
  );
 regGWorldCharInfo( i, _CHAR( '4' ), 11, 12, 4, 10, 11,
  "0000011000" +
  "0000101000" +
  "0000101000" +
  "0001001000" +
  "0010001000" +
  "0010001000" +
  "0100001000" +
  "0111111100" +
  "0000001000" +
  "0000001000" +
  "0000111100"
  );
 regGWorldCharInfo( i, _CHAR( '5' ), 11, 12, 4, 10, 11,
  "0011111100" +
  "0010000000" +
  "0010000000" +
  "0010000000" +
  "0010111000" +
  "0011000100" +
  "0000000010" +
  "0000000010" +
  "0000000010" +
  "0110000100" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( '6' ), 11, 12, 4, 10, 11,
  "0000011110" +
  "0001100000" +
  "0010000000" +
  "0010000000" +
  "0101111000" +
  "0110000100" +
  "0100000010" +
  "0100000010" +
  "0010000010" +
  "0010000100" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( '7' ), 11, 12, 4, 10, 11,
  "0111111100" +
  "0100000100" +
  "0000000100" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000100000" +
  "0000100000"
  );
 regGWorldCharInfo( i, _CHAR( '8' ), 11, 12, 4, 10, 11,
  "0001110000" +
  "0010001000" +
  "0100000100" +
  "0100000100" +
  "0010001000" +
  "0001110000" +
  "0010001000" +
  "0100000100" +
  "0100000100" +
  "0010001000" +
  "0001110000"
  );
 regGWorldCharInfo( i, _CHAR( '9' ), 11, 12, 4, 10, 11,
  "0001110000" +
  "0010001000" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0010001100" +
  "0001110100" +
  "0000000100" +
  "0000001000" +
  "0000110000" +
  "0111000000"
  );
 regGWorldCharInfo( i, _CHAR( 'A' ), 11, 12, 4, 10, 10,
  "0111110000" +
  "0000110000" +
  "0001001000" +
  "0001001000" +
  "0010000100" +
  "0010000100" +
  "0011111100" +
  "0100000010" +
  "0100000010" +
  "1111001111"
  );
 regGWorldCharInfo( i, _CHAR( 'B' ), 11, 12, 4, 10, 10,
  "1111111000" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0111111000" +
  "0100000100" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "1111111100"
  );
 regGWorldCharInfo( i, _CHAR( 'C' ), 11, 12, 4, 10, 10,
  "0001111010" +
  "0110000110" +
  "0100000010" +
  "1000000000" +
  "1000000000" +
  "1000000000" +
  "1000000000" +
  "0100000010" +
  "0110000100" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( 'D' ), 11, 12, 4, 10, 10,
  "1111110000" +
  "0100001100" +
  "0100000100" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000100" +
  "0100001100" +
  "1111110000"
  );
 regGWorldCharInfo( i, _CHAR( 'E' ), 11, 12, 4, 10, 10,
  "1111111100" +
  "0100000100" +
  "0100000100" +
  "0100010000" +
  "0111110000" +
  "0100010000" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "1111111110"
  );
 regGWorldCharInfo( i, _CHAR( 'F' ), 11, 12, 4, 10, 10,
  "1111111110" +
  "0100000010" +
  "0100000010" +
  "0100010000" +
  "0111110000" +
  "0100010000" +
  "0100000000" +
  "0100000000" +
  "0100000000" +
  "1111100000"
  );
 regGWorldCharInfo( i, _CHAR( 'G' ), 11, 12, 4, 10, 10,
  "0001111010" +
  "0110000110" +
  "0100000010" +
  "1000000000" +
  "1000000000" +
  "1000011111" +
  "1000000010" +
  "0100000010" +
  "0110000110" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( 'H' ), 11, 12, 4, 10, 10,
  "1110001110" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0111111100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "1110001110"
  );
 regGWorldCharInfo( i, _CHAR( 'I' ), 11, 12, 4, 10, 10,
  "0111111100" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0111111100"
  );
 regGWorldCharInfo( i, _CHAR( 'J' ), 11, 12, 4, 10, 10,
  "0001111110" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "1000001000" +
  "1000001000" +
  "1000001000" +
  "0100011000" +
  "0011110000"
  );
 regGWorldCharInfo( i, _CHAR( 'K' ), 11, 12, 4, 10, 10,
  "1111001110" +
  "0100000100" +
  "0100001000" +
  "0100010000" +
  "0101100000" +
  "0110010000" +
  "0100001000" +
  "0100001000" +
  "0100000100" +
  "1111000111"
  );
 regGWorldCharInfo( i, _CHAR( 'L' ), 11, 12, 4, 10, 10,
  "1111100000" +
  "0010000000" +
  "0010000000" +
  "0010000000" +
  "0010000000" +
  "0010000000" +
  "0010000010" +
  "0010000010" +
  "0010000010" +
  "1111111110"
  );
 regGWorldCharInfo( i, _CHAR( 'M' ), 11, 12, 4, 10, 10,
  "1100000011" +
  "0110000110" +
  "0101000110" +
  "0101001010" +
  "0100101010" +
  "0100110010" +
  "0100010010" +
  "0100000010" +
  "0100000010" +
  "1110000111"
  );
 regGWorldCharInfo( i, _CHAR( 'N' ), 11, 12, 4, 10, 10,
  "1100001110" +
  "0110000100" +
  "0101000100" +
  "0101000100" +
  "0100100100" +
  "0100100100" +
  "0100010100" +
  "0100010100" +
  "0100001100" +
  "1110000100"
  );
 regGWorldCharInfo( i, _CHAR( 'O' ), 11, 12, 4, 10, 10,
  "0001111000" +
  "0110000110" +
  "0100000010" +
  "1000000001" +
  "1000000001" +
  "1000000001" +
  "1000000001" +
  "0100000010" +
  "0110000110" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( 'P' ), 11, 12, 4, 10, 10,
  "1111111000" +
  "0010000100" +
  "0010000010" +
  "0010000010" +
  "0010000100" +
  "0011111000" +
  "0010000000" +
  "0010000000" +
  "0010000000" +
  "1111110000"
  );
 regGWorldCharInfo( i, _CHAR( 'Q' ), 11, 12, 4, 10, 10,
  "0001111000" +
  "0110000110" +
  "0100000010" +
  "1000000001" +
  "1000000001" +
  "1000000001" +
  "1000000001" +
  "0100000010" +
  "0110000110" +
  "0001111000" +
  "0000100000" +
  "0001111001" +
  "0010000110"
  );
 regGWorldCharInfo( i, _CHAR( 'R' ), 11, 12, 4, 10, 10,
  "1111110000" +
  "0100001000" +
  "0100000100" +
  "0100000100" +
  "0100001000" +
  "0111110000" +
  "0100001000" +
  "0100001000" +
  "0100000100" +
  "1111000110"
  );
 regGWorldCharInfo( i, _CHAR( 'S' ), 11, 12, 4, 10, 10,
  "0011110100" +
  "0100001100" +
  "1000000100" +
  "1100000000" +
  "0011110000" +
  "0000001100" +
  "0000000010" +
  "1000000010" +
  "1100000100" +
  "1011111000"
  );
 regGWorldCharInfo( i, _CHAR( 'T' ), 11, 12, 4, 10, 10,
  "1111111110" +
  "1000100010" +
  "1000100010" +
  "1000100010" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0011111000"
  );
 regGWorldCharInfo( i, _CHAR( 'U' ), 11, 12, 4, 10, 10,
  "1111001111" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0010000100" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( 'V' ), 11, 12, 4, 10, 10,
  "1111001111" +
  "0100000010" +
  "0100000010" +
  "0010000100" +
  "0010000100" +
  "0010000100" +
  "0001001000" +
  "0001001000" +
  "0000110000" +
  "0000110000"
  );
 regGWorldCharInfo( i, _CHAR( 'W' ), 11, 12, 4, 10, 10,
  "1111000111" +
  "0100000001" +
  "0100010001" +
  "0100010001" +
  "0100110010" +
  "0010101010" +
  "0010101010" +
  "0011000110" +
  "0011000110" +
  "0001000100"
  );
 regGWorldCharInfo( i, _CHAR( 'X' ), 11, 12, 4, 10, 10,
  "1110001110" +
  "0100000100" +
  "0010001000" +
  "0001010000" +
  "0000100000" +
  "0000100000" +
  "0001010000" +
  "0010001000" +
  "0100000100" +
  "1110001110"
  );
 regGWorldCharInfo( i, _CHAR( 'Y' ), 11, 12, 4, 10, 10,
  "1110001110" +
  "0100000100" +
  "0010001000" +
  "0001010000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0011111000"
  );
 regGWorldCharInfo( i, _CHAR( 'Z' ), 11, 12, 4, 10, 10,
  "0111111110" +
  "0100000010" +
  "0100000100" +
  "0100001000" +
  "0000010000" +
  "0000100000" +
  "0001000010" +
  "0010000010" +
  "0100000010" +
  "0111111110"
  );
 regGWorldCharInfo( i, _CHAR( 'a' ), 11, 12, 4, 10, 8,
  "0001111000" +
  "0110000100" +
  "0000000100" +
  "0011111100" +
  "0100000100" +
  "0100000100" +
  "0100001100" +
  "0011110110"
  );
 regGWorldCharInfo( i, _CHAR( 'b' ), 11, 12, 4, 10, 11,
  "1100000000" +
  "0100000000" +
  "0100000000" +
  "0101111000" +
  "0110000100" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0110000100" +
  "1101111000"
  );
 regGWorldCharInfo( i, _CHAR( 'c' ), 11, 12, 4, 10, 8,
  "0001111010" +
  "0010000110" +
  "0100000000" +
  "0100000000" +
  "0100000000" +
  "0100000000" +
  "0010000110" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( 'd' ), 11, 12, 4, 10, 11,
  "0000011100" +
  "0000000100" +
  "0000000100" +
  "0011110100" +
  "0100001100" +
  "1000000100" +
  "1000000100" +
  "1000000100" +
  "1000000100" +
  "0100001100" +
  "0011110110"
  );
 regGWorldCharInfo( i, _CHAR( 'e' ), 11, 12, 4, 10, 8,
  "0011111000" +
  "0100000100" +
  "1000000010" +
  "1111111110" +
  "1000000000" +
  "1000000000" +
  "0100000110" +
  "0011111000"
  );
 regGWorldCharInfo( i, _CHAR( 'f' ), 11, 12, 4, 10, 11,
  "0000111000" +
  "0001000110" +
  "0001000000" +
  "0111111100" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0111111100"
  );
 regGWorldCharInfo( i, _CHAR( 'g' ), 11, 12, 4, 10, 8,
  "0011110110" +
  "0100001100" +
  "1000000100" +
  "1000000100" +
  "1000000100" +
  "1000000100" +
  "0100001100" +
  "0011110100" +
  "0000000100" +
  "0000000100" +
  "0011111000"
  );
 regGWorldCharInfo( i, _CHAR( 'h' ), 11, 12, 4, 10, 11,
  "1100000000" +
  "0100000000" +
  "0100000000" +
  "0101111000" +
  "0110000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "1111011110"
  );
 regGWorldCharInfo( i, _CHAR( 'i' ), 11, 12, 4, 10, 12,
  "0000100000" +
  "0000100000" +
  "0000000000" +
  "0000000000" +
  "0011100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0111111100"
  );
 regGWorldCharInfo( i, _CHAR( 'j' ), 11, 12, 4, 10, 12,
  "0000010000" +
  "0000010000" +
  "0000000000" +
  "0000000000" +
  "0111111000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000010000" +
  "0111100000"
  );
 regGWorldCharInfo( i, _CHAR( 'k' ), 11, 12, 4, 10, 11,
  "1110000000" +
  "0010000000" +
  "0010000000" +
  "0010011100" +
  "0010001000" +
  "0010010000" +
  "0010100000" +
  "0011100000" +
  "0010010000" +
  "0010001000" +
  "1110011110"
  );
 regGWorldCharInfo( i, _CHAR( 'l' ), 11, 12, 4, 10, 11,
  "0011110000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0111111110"
  );
 regGWorldCharInfo( i, _CHAR( 'm' ), 11, 12, 4, 10, 8,
  "1101101100" +
  "0110010010" +
  "0100010010" +
  "0100010010" +
  "0100010010" +
  "0100010010" +
  "0100010010" +
  "1111011011"
  );
 regGWorldCharInfo( i, _CHAR( 'n' ), 11, 12, 4, 10, 8,
  "1101111000" +
  "0110000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "0100000100" +
  "1111001110"
  );
 regGWorldCharInfo( i, _CHAR( 'o' ), 11, 12, 4, 10, 8,
  "0001111000" +
  "0010000100" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0010000100" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( 'p' ), 11, 12, 4, 10, 8,
  "1101111000" +
  "0110000100" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0100000010" +
  "0110000100" +
  "0101111000" +
  "0100000000" +
  "0100000000" +
  "1111000000"
  );
 regGWorldCharInfo( i, _CHAR( 'q' ), 11, 12, 4, 10, 8,
  "0011110110" +
  "0100001100" +
  "1000000100" +
  "1000000100" +
  "1000000100" +
  "1000000100" +
  "0100001100" +
  "0011110100" +
  "0000000100" +
  "0000000100" +
  "0000011110"
  );
 regGWorldCharInfo( i, _CHAR( 'r' ), 11, 12, 4, 10, 8,
  "0111011100" +
  "0001100010" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0111111100"
  );
 regGWorldCharInfo( i, _CHAR( 's' ), 11, 12, 4, 10, 8,
  "0011110100" +
  "0100001100" +
  "0100000000" +
  "0011111000" +
  "0000000100" +
  "0000000010" +
  "0110000100" +
  "0101111000"
  );
 regGWorldCharInfo( i, _CHAR( 't' ), 11, 12, 4, 10, 10,
  "0001000000" +
  "0001000000" +
  "0111111100" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000010" +
  "0000111100"
  );
 regGWorldCharInfo( i, _CHAR( 'u' ), 11, 12, 4, 10, 8,
  "0110011100" +
  "0010000100" +
  "0010000100" +
  "0010000100" +
  "0010000100" +
  "0010000100" +
  "0010001100" +
  "0001110110"
  );
 regGWorldCharInfo( i, _CHAR( 'v' ), 11, 12, 4, 10, 8,
  "1110001110" +
  "0100000100" +
  "0100000100" +
  "0010001000" +
  "0010001000" +
  "0001010000" +
  "0001110000" +
  "0000100000"
  );
 regGWorldCharInfo( i, _CHAR( 'w' ), 11, 12, 4, 10, 8,
  "1110000111" +
  "0100000001" +
  "0100010001" +
  "0010110010" +
  "0010111010" +
  "0010101010" +
  "0001101100" +
  "0001000100"
  );
 regGWorldCharInfo( i, _CHAR( 'x' ), 11, 12, 4, 10, 8,
  "0111001110" +
  "0010000100" +
  "0001001000" +
  "0000110000" +
  "0000110000" +
  "0001001000" +
  "0010000100" +
  "0111001110"
  );
 regGWorldCharInfo( i, _CHAR( 'y' ), 11, 12, 4, 10, 8,
  "1110000111" +
  "0100000010" +
  "0010000100" +
  "0010000100" +
  "0001001000" +
  "0001010000" +
  "0000110000" +
  "0000100000" +
  "0000100000" +
  "0001000000" +
  "0111100000"
  );
 regGWorldCharInfo( i, _CHAR( 'z' ), 11, 12, 4, 10, 8,
  "0111111100" +
  "0100001000" +
  "0000010000" +
  "0000100000" +
  "0001000000" +
  "0010000000" +
  "0100000100" +
  "0111111100"
  );
 regGWorldCharInfo( i, _CHAR( ' ' ), 11, 12, 4, 10, 12,
  ""
  );
 regGWorldCharInfo( i, _CHAR( '!' ), 11, 12, 4, 10, 11,
  "0001110000" +
  "0001110000" +
  "0001110000" +
  "0001110000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000000000" +
  "0000000000" +
  "0001110000" +
  "0001110000"
  );
 regGWorldCharInfo( i, _CHAR( '"' ), 11, 12, 4, 10, 11,
  "0111011100" +
  "0111011100" +
  "0010001000" +
  "0010001000" +
  "0010001000"
  );
 regGWorldCharInfo( i, _CHAR( '#' ), 11, 12, 4, 10, 11,
  "0000101000" +
  "0000101000" +
  "0000101000" +
  "0111111100" +
  "0001010000" +
  "0001010000" +
  "0111111100" +
  "0010100000" +
  "0010100000" +
  "0010100000" +
  "0010100000"
  );
 regGWorldCharInfo( i, _CHAR( '$' ), 11, 12, 4, 10, 11,
  "0000100000" +
  "0001110100" +
  "0010001100" +
  "0010000000" +
  "0011000000" +
  "0000111000" +
  "0000000100" +
  "0000000100" +
  "0110000100" +
  "0101111000" +
  "0000100000" +
  "0000100000" +
  "0000100000"
  );
 regGWorldCharInfo( i, _CHAR( '%' ), 11, 12, 4, 10, 11,
  "0011100000" +
  "0100010000" +
  "0100010000" +
  "0011100000" +
  "0000001110" +
  "0001111000" +
  "0111000000" +
  "0000011100" +
  "0000100010" +
  "0000100010" +
  "0000011100"
  );
 regGWorldCharInfo( i, _CHAR( '&' ), 11, 12, 4, 10, 9,
  "0001110000" +
  "0010001000" +
  "0010000000" +
  "0001000000" +
  "0011100000" +
  "0100100100" +
  "0100011000" +
  "0100010000" +
  "0011101100"
  );
 regGWorldCharInfo( i, _CHAR( '\'' ), 11, 12, 4, 10, 11,
  "0001110000" +
  "0001110000" +
  "0000100000" +
  "0000100000" +
  "0000100000"
  );
 regGWorldCharInfo( i, _CHAR( '(' ), 11, 12, 4, 10, 11,
  "0000000100" +
  "0000001000" +
  "0000010000" +
  "0000010000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000010000" +
  "0000010000" +
  "0000001000" +
  "0000000100"
  );
 regGWorldCharInfo( i, _CHAR( ')' ), 11, 12, 4, 10, 11,
  "0010000000" +
  "0001000000" +
  "0000100000" +
  "0000100000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000100000" +
  "0000100000" +
  "0001000000" +
  "0010000000"
  );
 regGWorldCharInfo( i, _CHAR( '*' ), 11, 12, 4, 10, 11,
  "0000100000" +
  "0000100000" +
  "0110101100" +
  "0001110000" +
  "0000100000" +
  "0001010000" +
  "0010001000"
  );
 regGWorldCharInfo( i, _CHAR( '+' ), 11, 12, 4, 10, 10,
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "1111111110" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000"
  );
 regGWorldCharInfo( i, _CHAR( ',' ), 11, 12, 4, 10, 3,
  "0000111000" +
  "0000110000" +
  "0000110000" +
  "0001100000" +
  "0001000000"
  );
 regGWorldCharInfo( i, _CHAR( '-' ), 11, 12, 4, 10, 5,
  "0111111110"
  );
 regGWorldCharInfo( i, _CHAR( '.' ), 11, 12, 4, 10, 2,
  "0001110000" +
  "0001110000"
  );
 regGWorldCharInfo( i, _CHAR( '/' ), 11, 12, 4, 10, 12,
  "0000000110" +
  "0000000100" +
  "0000001100" +
  "0000001000" +
  "0000011000" +
  "0000010000" +
  "0000110000" +
  "0000100000" +
  "0001100000" +
  "0001000000" +
  "0011000000" +
  "0010000000" +
  "0110000000"
  );
 regGWorldCharInfo( i, _CHAR( ':' ), 11, 12, 4, 10, 8,
  "0001110000" +
  "0001110000" +
  "0000000000" +
  "0000000000" +
  "0000000000" +
  "0000000000" +
  "0001110000" +
  "0001110000"
  );
 regGWorldCharInfo( i, _CHAR( ';' ), 11, 12, 4, 10, 8,
  "0001110000" +
  "0001110000" +
  "0000000000" +
  "0000000000" +
  "0000000000" +
  "0001110000" +
  "0001100000" +
  "0011000000" +
  "0010000000"
  );
 regGWorldCharInfo( i, _CHAR( '<' ), 11, 12, 4, 10, 9,
  "0000000110" +
  "0000011000" +
  "0001100000" +
  "0110000000" +
  "0110000000" +
  "0001100000" +
  "0000011000" +
  "0000000110"
  );
 regGWorldCharInfo( i, _CHAR( '=' ), 11, 12, 4, 10, 7,
  "0111111110" +
  "0000000000" +
  "0000000000" +
  "0111111110"
  );
 regGWorldCharInfo( i, _CHAR( '>' ), 11, 12, 4, 10, 9,
  "0110000000" +
  "0001100000" +
  "0000011000" +
  "0000000110" +
  "0000000110" +
  "0000011000" +
  "0001100000" +
  "0110000000"
  );
 regGWorldCharInfo( i, _CHAR( '?' ), 11, 12, 4, 10, 10,
  "0011111000" +
  "0100000100" +
  "0100000100" +
  "0000000100" +
  "0000011000" +
  "0000100000" +
  "0000100000" +
  "0000000000" +
  "0001110000" +
  "0001110000"
  );
 regGWorldCharInfo( i, _CHAR( '@' ), 11, 12, 4, 10, 11,
  "0001111000" +
  "0010000100" +
  "0100000100" +
  "0100111100" +
  "0101000100" +
  "0101000100" +
  "0101000100" +
  "0100111100" +
  "0100000000" +
  "0100000000" +
  "0010001000" +
  "0001110000"
  );
 regGWorldCharInfo( i, _CHAR( '[' ), 11, 12, 4, 10, 11,
  "0001111000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001000000" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( '\\' ), 11, 12, 4, 10, 12,
  "0110000000" +
  "0010000000" +
  "0011000000" +
  "0001000000" +
  "0001100000" +
  "0000100000" +
  "0000110000" +
  "0000010000" +
  "0000011000" +
  "0000001000" +
  "0000001100" +
  "0000000100" +
  "0000000110"
  );
 regGWorldCharInfo( i, _CHAR( ']' ), 11, 12, 4, 10, 11,
  "0001111000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0000001000" +
  "0001111000"
  );
 regGWorldCharInfo( i, _CHAR( '^' ), 11, 12, 4, 10, 11,
  "0000100000" +
  "0001110000" +
  "0011011000" +
  "0110001100" +
  "0100000100"
  );
 regGWorldCharInfo( i, _CHAR( '_' ), 11, 12, 4, 11, -3,
  "11111111111"
  );
 regGWorldCharInfo( i, _CHAR( '`' ), 11, 12, 4, 10, 11,
  "0011000000" +
  "0001100000" +
  "0000110000"
  );
 regGWorldCharInfo( i, _CHAR( '{' ), 11, 12, 4, 10, 11,
  "0000011000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0011000000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000011000"
  );
 regGWorldCharInfo( i, _CHAR( '|' ), 11, 12, 4, 10, 11,
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000" +
  "0000100000"
  );
 regGWorldCharInfo( i, _CHAR( '}' ), 11, 12, 4, 10, 11,
  "0001100000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000001100" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0000010000" +
  "0001100000"
  );
 regGWorldCharInfo( i, _CHAR( '~' ), 11, 12, 4, 10, 6,
  "0011000000" +
  "0100100100" +
  "0000011000"
  );
}
var resetCalculator = false;
var started = false;
var _console_break = "<br>";
function consoleBreak(){
 return _console_break;
}
function _Console( id ){
 if( window.onConsoleUpdate == undefined ) window.onConsoleUpdate = function( id ){};
 this._id = id;
 this._div = document.getElementById( this._id );
 this._html = "";
 this._blankLine = "";
 this._maxLen = 0;
 this._color = "";
 this._lastColor = "";
 this._bold = false;
 this._italic = false;
 this._lock = false;
 this._needUpdate = false;
}
_Console.prototype = {
 setMaxBlankLine : function( num ){
  this._blankLine = "";
  for( var i = 0; i <= num; i++ ){
   this._blankLine += _console_break;
  }
 },
 setMaxLen : function( len ){
  this._maxLen = len;
 },
 setColor : function( color ){
  this._color = (color == undefined) ? "" : color;
 },
 setBold : function( f ){
  this._bold = f;
 },
 setItalic : function( f ){
  this._italic = f;
 },
 lock : function(){
  this._lock = true;
  this._needUpdate = false;
 },
 unlock : function(){
  this._lock = false;
  if( this._needUpdate ){
   this._update();
   this._needUpdate = false;
  }
 },
 _update : function(){
  if( this._lock ){
   this._needUpdate = true;
   return;
  }
  if( this._maxLen > 0 ){
   while( this._html.length > this._maxLen ){
    var index = this._html.indexOf( _console_break );
    if( index < 0 ){
     break;
    }
    this._html = this._html.slice( index + _console_break.length );
   }
  }
  this._div.innerHTML = this._html;
  if( this._html.length > 0 ){
   onConsoleUpdate( this._id );
  }
 },
 _add : function( str ){
  if( str.length > 0 ){
   if( this._bold ){
    if( this._html.slice( -4 ) == "</b>" ){
     this._html = this._html.substring( 0, this._html.length - 4 );
    } else {
     this._html += "<b>";
    }
   }
   if( this._italic ){
    if( this._html.slice( -4 ) == "</i>" ){
     this._html = this._html.substring( 0, this._html.length - 4 );
    } else {
     this._html += "<i>";
    }
   }
   if( this._color.length > 0 ){
    if( (this._html.slice( -7 ) == "</span>") && (this._color == this._lastColor) ){
     this._html = this._html.substring( 0, this._html.length - 7 );
    } else {
     this._html += "<span style='color:#" + this._color + "'>";
    }
    this._lastColor = this._color;
   }
   this._html += str;
   if( this._color.length > 0 ){
    this._html += "</span>";
   }
   if( this._italic ){
    this._html += "</i>";
   }
   if( this._bold ){
    this._html += "</b>";
   }
  }
 },
 clear : function(){
  this._html = "";
  this._update();
 },
 newLine : function(){
  if( this._html.length >= _console_break.length ){
   if( this._html.slice( -_console_break.length ) != _console_break ){
    this._html += _console_break;
    this._update();
   }
  }
 },
 print : function( str ){
  if( str != undefined ){
   this._add( str );
   this._update();
  }
 },
 println : function( str ){
  var needUpdate = false;
  if( str != undefined ){
   this._add( str );
   needUpdate = true;
  }
  if( (this._blankLine.length > 0) && (this._html.length >= this._blankLine.length) ){
   if( this._html.slice( -this._blankLine.length ) != this._blankLine ){
    this._html += _console_break;
    needUpdate = true;
   }
  } else {
   this._html += _console_break;
   needUpdate = true;
  }
  if( needUpdate ){
   this._update();
  }
 },
 scrollBottom : function(){
  this._div.scrollTop = this._div.scrollHeight;
 }
};
var con = new Array();
var conId, errId;
function onConsoleUpdate( id ){
 if( id == conId ){
  if( started ){
   doButtonUIConsole();
  }
 } else if( id == errId ){
  document.getElementById( "button_ui_log" ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
  document.getElementById( "button_ui_log2" ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
 }
}
function _Error(){
 if( window.onError == undefined ) window.onError = function( e ){};
 this._message = new String();
 this._name = new String();
 this._description = new String();
 this._number = new String();
 this._file = new String();
 this._line = new String();
 this._column = new String();
 this._stack = new String();
}
_Error.prototype = {
 message : function(){
  return this._message;
 },
 name : function(){
  return this._name;
 },
 description : function(){
  return this._description;
 },
 number : function(){
  return this._number;
 },
 file : function(){
  return this._file;
 },
 line : function(){
  return this._line;
 },
 column : function(){
  return this._column;
 },
 stack : function(){
  return this._stack;
 }
};
function catchError( e ){
 var _e = new _Error();
 _e._message = e.message;
 _e._name = e.name;
 if( e.description ) _e._description = e.description;
 if( e.number ) _e._number = "" + e.number;
 if( e.fileName ) _e._file = e.fileName;
 if( e.lineNumber ) _e._line = "" + e.lineNumber;
 if( e.columnNumber ) _e._column = "" + e.columnNumber;
 if( e.stack ) _e._stack = e.stack;
 onError( _e );
}
function clip_onerror( message, url, line ){
 var e = new _Error();
 e._message = message;
 e._file = url;
 e._line = line;
 onError( e );
 return true;
}
function onError( e ){
 con[0].newLine();
 con[0].setColor( "ff0000" );
 con[0].println( "message: " + e.message() );
 con[0].println( "name: " + e.name() );
 con[0].println( "description: " + e.description() );
 con[0].println( "number: " + e.number() );
 con[0].println( "file: " + e.file() );
 con[0].println( "line: " + e.line() );
 con[0].println( "column: " + e.column() );
 var tmp = new _String( e.stack() );
 tmp.escape().replaceNewLine( consoleBreak() );
 con[0].println( "stack: " + tmp.str() );
 con[0].setColor();
}
var _canvas_env;
function _CanvasEnv(){
 this._color_r = 0;
 this._color_g = 0;
 this._color_b = 0;
 this._color_a = 255;
 this._font = "";
 this._stroke_width = 1.0;
}
function setCanvasEnv( env ){
 _canvas_env = env;
}
function _Canvas( id ){
 if( id == undefined ){
  this._canvas = document.createElement( "canvas" );
  this._create = true;
 } else {
  this._canvas = document.getElementById( id );
  this._create = false;
 }
 this._context = this._canvas.getContext( "2d" );
 this._resetContext();
}
_Canvas.prototype = {
 element : function(){
  return this._canvas;
 },
 context : function(){
  return this._context;
 },
 _resetContext : function(){
  this._context.textAlign = "left";
  this._context.textBaseline = "bottom";
  this._setColor();
  this._setFont();
  this._setStrokeWidth();
 },
 setSize : function( width, height ){
  if( this._create ){
   this._canvas.width = width;
   this._canvas.height = height;
  } else {
   this._canvas.setAttribute( "width" , "" + width );
   this._canvas.setAttribute( "height", "" + height );
  }
  this._resetContext();
 },
 left : function(){
  if( this._create ){
   return 0;
  }
  var e = this._canvas;
  var left = 0;
  while( e ){
   left += e.offsetLeft;
   e = e.offsetParent;
  }
  return left;
 },
 top : function(){
  if( this._create ){
   return 0;
  }
  var e = this._canvas;
  var top = 0;
  while( e ){
   top += e.offsetTop;
   e = e.offsetParent;
  }
  return top;
 },
 width : function(){
  return parseInt( this._canvas.width );
 },
 height : function(){
  return parseInt( this._canvas.height );
 },
 _setColor : function(){
  var color;
  if( _canvas_env._color_a == 255 ){
   color = "rgb(" + _canvas_env._color_r + "," + _canvas_env._color_g + "," + _canvas_env._color_b + ")";
  } else {
   color = "rgba(" + _canvas_env._color_r + "," + _canvas_env._color_g + "," + _canvas_env._color_b + "," + (_canvas_env._color_a / 255.0) + ")";
  }
  this._context.fillStyle = color;
  this._context.strokeStyle = color;
 },
 setColor : function( r, g, b, a ){
  if( a == undefined ){
   a = 255;
  }
  if( (r != _canvas_env._color_r) || (g != _canvas_env._color_g) || (b != _canvas_env._color_b) || (a != _canvas_env._color_a) ){
   _canvas_env._color_r = r;
   _canvas_env._color_g = g;
   _canvas_env._color_b = b;
   _canvas_env._color_a = a;
   this._setColor();
  }
 },
 setColorRGB : function( rgb ){
  this.setColor( (rgb & 0xFF0000) >> 16, (rgb & 0x00FF00) >> 8, rgb & 0x0000FF );
 },
 setColorBGR : function( bgr ){
  this.setColor( bgr & 0x0000FF, (bgr & 0x00FF00) >> 8, (bgr & 0xFF0000) >> 16 );
 },
 _setFont : function(){
  if( _canvas_env._font.length > 0 ){
   this._context.font = _canvas_env._font;
  }
 },
 setFont : function( size, family ){
  _canvas_env._font = "" + size + "px " + ((family.indexOf( " " ) >= 0) ? "'" + family + "'" : family);
  this._setFont();
 },
 _setStrokeWidth : function(){
  this._context.lineWidth = _canvas_env._stroke_width;
 },
 setStrokeWidth : function( width ){
  _canvas_env._stroke_width = width;
  this._setStrokeWidth();
 },
 clearClip : function()
 {
  this._context.restore();
  this._resetContext();
 },
 setClip : function( x, y, width, height )
 {
  if( !!this._context.clip )
  {
   this.clearClip();
   this._context.save();
   this._context.beginPath();
   this._context.moveTo( x, y );
   this._context.lineTo( x + width, y );
   this._context.lineTo( x + width, y + height );
   this._context.lineTo( x, y + height );
   this._context.closePath();
   this._context.clip();
  }
 },
 clear : function( x, y, w, h ){
  if( (x == undefined) && (y == undefined) && (w == undefined) && (h == undefined) ){
   this._canvas.width = this._canvas.width;
  } else if( (w == undefined) && (h == undefined) ){
   this._context.clearRect( x, y, 1, 1 );
  } else {
   this._context.clearRect( x, y, w, h );
  }
  this._resetContext();
 },
 put : function( x, y ){
  this._context.fillRect( x, y, 1, 1 );
 },
 fill : function( x, y, w, h ){
  this._context.fillRect( x, y, w, h );
 },
 line : function( x1, y1, x2, y2, scale ){
  this._context.beginPath();
  if( scale == undefined ){
   this._context.moveTo( x1 + 0.5, y1 + 0.5 );
   this._context.lineTo( x2 + 0.5, y2 + 0.5 );
  } else {
   this._context.moveTo( (x1 + 0.5) * scale, (y1 + 0.5) * scale );
   this._context.lineTo( (x2 + 0.5) * scale, (y2 + 0.5) * scale );
  }
  this._context.stroke();
  this._context.closePath();
 },
 rect : function( x, y, w, h, scale ){
  if( scale == undefined ){
   this._context.strokeRect( x + 0.5, y + 0.5, w, h );
  } else {
   this._context.strokeRect( (x + 0.5) * scale, (y + 0.5) * scale, w * scale, h * scale );
  }
 },
 circle : function( cx, cy, r ){
  this._context.beginPath();
  this._context.arc( cx, cy, r, 0.0, Math.PI * 2.0, false );
  this._context.stroke();
 },
 drawString : function( str, x, y ){
  if( !!this._context.fillText ){
   this._context.fillText( str, x, y );
  }
 },
 drawImage : function( image, w, h ){
  if( (w == image.width) && (h == image.height) ){
   this._context.drawImage( image, 0, 0 );
  } else {
   this._context.drawImage( image, 0, 0, image.width, image.height, 0, 0, w, h );
  }
 },
 imageData : function( w, h ){
  return this._context.getImageData( 0, 0, w, h );
 }
};
var canvas;
function canvasClear(){
 canvas.setColorRGB( gWorldBgColor() );
 canvas.fill( 0, 0, canvas.width(), canvas.height() );
}
function canvasSetColor( bgrColor ){
 canvas.setColorBGR( bgrColor );
}
function canvasPut( x, y ){
 canvas.put( x, y );
 doButtonUIGWorld();
}
function canvasFill( x, y, w, h ){
 canvas.fill( x, y, w, h );
 doButtonUIGWorld();
}
function canvasLine( x1, y1, x2, y2 ){
 canvas.line( x1, y1, x2, y2 );
 doButtonUIGWorld();
}
var _input_file_cnt;
var _input_file_num;
function canUseFile(){
 return (window.FileReader && window.FileList && window.File);
}
function _InputFile( id, mode ){
 if( window.onInputFileLoadImage == undefined ) window.onInputFileLoadImage = function( name, image ){};
 if( window.onInputFileLoad == undefined ) window.onInputFileLoad = function( func, data ){};
 if( window.onInputFileLoadEnd == undefined ) window.onInputFileLoadEnd = function( num ){};
 this._input = document.getElementById( id );
 if( mode == undefined ){
  mode = 0;
 }
 switch( mode ){
 case 0:
  this._input.addEventListener( "change", _onInputFileChange, false );
  break;
 case 1:
  this._input.addEventListener( "change", _onInputFileChangeExtfunc, false );
  break;
 case 2:
  this._input.addEventListener( "change", _onInputFileChangeImage, false );
  break;
 }
}
_InputFile.prototype = {
 element : function(){
  return this._input;
 }
};
function _onInputFileChangeExtfunc( e ){
 var files = e.target.files;
 if( files.length == 0 ){
  return;
 }
 _input_file_cnt = 0;
 _input_file_num = files.length;
 for( var i = 0; i < files.length; i++ ){
  var file = files.item( i );
  var reader = new FileReader();
  reader.onload = (function( f ){
   return function( e ){
    if( f.name.indexOf( ".cef" ) > 0 ){
     var j;
     var data = e.target.result;
     var func = f.name.substring( 0, f.name.indexOf( ".cef" ) );
     var top;
     for( top = 0; top < data.length; top++ ){
      if( !isCharSpace( data, top ) && (data.charAt( top ) != '\t') ){
       break;
      }
     }
     var tmp = data.substring( top, top + 11 );
     if( tmp.toLowerCase() == "#!namespace" ){
      var data2 = new _String( data );
      var data3 = data2.replaceNewLine().str();
      if( data3.indexOf( "\n" ) < 0 ){
       data3 += "\n";
      }
      var nameSpace = new String();
      for( j = top + 11; ; j++ ){
       if( !isCharSpace( data3, j ) && (data3.charAt( j ) != '\t') ){
        break;
       }
      }
      if( j > top + 11 ){
       for ( ; ; j++ ){
        var chr = data3.charAt( j );
        if( isCharSpace( data3, j ) || (chr == '\t') || (chr == '\n') ){
         break;
        }
        nameSpace += chr;
       }
       if( nameSpace.length > 0 ){
        func = nameSpace + ":" + func;
       }
      }
     }
     onInputFileLoad( func, data );
     _input_file_cnt++;
     if( _input_file_cnt >= _input_file_num ){
      onInputFileLoadEnd( _input_file_cnt );
     }
    }
   };
  })( file );
  reader.readAsText( file );
 }
}
function _onInputFileChangeImage( e ){
 var files = e.target.files;
 if( files.length == 0 ){
  return true;
 }
 if( files[0].type.indexOf( "image/" ) == 0 ){
  var name = files[0].name;
  var reader = new FileReader();
  reader.onload = function(){
   var image = new Image();
   image.onload = function(){
    onInputFileLoadImage( name, image );
   };
   image.src = reader.result;
  };
  reader.readAsDataURL( files[0] );
  return true;
 }
 return false;
}
function _onInputFileChange( e ){
 if( _onInputFileChangeImage( e ) ){
  return;
 }
 _onInputFileChangeExtfunc( e );
}
var inputFile;
function __ProcError(){
 this._err = 0;
 this._num = 0;
 this._func = new String();
 this._token = new String();
 this._before = null;
 this._next = null;
}
function _ProcError(){
 this._top = null;
 this._end = null;
 this._num = 0;
}
_ProcError.prototype = {
 add : function( err, num, func, token ){
  var cur = this._top;
  while( true ){
   if( cur == null ){
    break;
   }
   if(
    (cur._err == err ) &&
    (cur._num == num ) &&
    (cur._func == func ) &&
    (cur._token == token)
   ){
    return;
   }
   cur = cur._next;
  }
  var tmp = new __ProcError();
  if( this._top == null ){
   this._top = tmp;
   this._end = tmp;
  } else {
   tmp._before = this._end;
   this._end._next = tmp;
   this._end = tmp;
  }
  tmp._err = err;
  tmp._num = num;
  tmp._func = func;
  tmp._token = token;
  this._num++;
 },
 delAll : function(){
  this._top = null;
  this._num = 0;
 },
 get : function( index, err , num , func , token ){
  var tmp = 0;
  var cur = this._top;
  while( true ){
   if( cur == null ){
    return false;
   }
   if( tmp == index ){
    break;
   }
   tmp++;
   cur = cur._next;
  }
  err .set( cur._err );
  num .set( cur._num );
  func .set( cur._func );
  token.set( cur._token );
  return true;
 },
 num : function(){
  return this._num;
 },
 isError : function(){
  var cur = this._top;
  while( cur != null ){
   if( (cur._err & _CLIP_PROC_WARN) == 0 ){
    return true;
   }
   cur = cur._next;
  }
  return false;
 }
};
function getProcErrorDefString( err, token, isCalculator, isEnglish ){
 var error = new String();
 switch( err ){
 case _CLIP_PROC_WARN_ARRAY:
  if( isEnglish ) error = "Array element number is negative.";
  else error = "配列の要素番号が負の値です";
  break;
 case _CLIP_PROC_WARN_DIV:
  if( isEnglish ) error = "Divide by zero.";
  else error = "ゼロで除算しました";
  break;
 case _CLIP_PROC_WARN_UNDERFLOW:
  if( isEnglish ) error = "Underflowed.";
  else error = "アンダーフローしました";
  break;
 case _CLIP_PROC_WARN_OVERFLOW:
  if( isEnglish ) error = "Overflow occurred.";
  else error = "オーバーフローしました";
  break;
 case _CLIP_PROC_WARN_ASIN:
  if( isEnglish ) error = "Argument of \"asin\" is out of the range of -1 to 1.";
  else error = "asinの引数が-1から1の範囲外になりました";
  break;
 case _CLIP_PROC_WARN_ACOS:
  if( isEnglish ) error = "Argument of \"acos\" is out of the range of -1 to 1.";
  else error = "acosの引数が-1から1の範囲外になりました";
  break;
 case _CLIP_PROC_WARN_ACOSH:
  if( isEnglish ) error = "Argument of \"acosh\" now has value less than 1.";
  else error = "acoshの引数が1未満の値になりました";
  break;
 case _CLIP_PROC_WARN_ATANH:
  if( isEnglish ) error = "The argument of \"atanh\" is less than or equal to -1 or 1 or more.";
  else error = "atanhの引数が-1以下または1以上の値になりました";
  break;
 case _CLIP_PROC_WARN_LOG:
  if( isEnglish ) error = "Argument of \"" + (isCalculator ? "ln" : "log") + "\" is 0 or negative value.";
  else error = (isCalculator ? "ln" : "log") + "の引数が0または負の値になりました";
  break;
 case _CLIP_PROC_WARN_LOG10:
  if( isEnglish ) error = "Argument of \"" + (isCalculator ? "log" : "log10") + "\" has become 0 or negative value.";
  else error = (isCalculator ? "log" : "log10") + "の引数が0または負の値になりました";
  break;
 case _CLIP_PROC_WARN_SQRT:
  if( isEnglish ) error = "Argument of \"sqrt\" has a negative value.";
  else error = "sqrtの引数が負の値になりました";
  break;
 case _CLIP_PROC_WARN_FUNCTION:
  if( isEnglish ) error = "Invalid argument for \"" + token + "\".";
  else error = token + "の引数が無効です";
  break;
 case _CLIP_PROC_WARN_RETURN:
  if( isEnglish ) error = "\"return\" can not return a value.";
  else error = "returnで値を返すことができません";
  break;
 case _CLIP_PROC_WARN_DEAD_TOKEN:
  if( isEnglish ) error = "Token is not executed.";
  else error = "実行されないトークンです";
  break;
 case _CLIP_PROC_WARN_SE_RETURN:
  if( isEnglish ) error = "\"$RETURN_A\" can not return a value.";
  else error = "$RETURN_Aで値を返すことができません";
  break;
 case _CLIP_LOOP_ERR_NULL:
  if( isEnglish ) error = "There is no token.";
  else error = "トークンがありません";
  break;
 case _CLIP_LOOP_ERR_COMMAND:
  if( isEnglish ) error = "Command not supported.";
  else error = "コマンドはサポートされていません";
  break;
 case _CLIP_LOOP_ERR_STAT:
  if( isEnglish ) error = "Control structure is not supported.";
  else error = "制御構造はサポートされていません";
  break;
 case _CLIP_PROC_ERR_UNARY:
  if( isEnglish ) error = "\"" + token + "\": Unary operator expression is incorrect.";
  else error = token + ":単項演算子表現が間違っています";
  break;
 case _CLIP_PROC_ERR_OPERATOR:
  if( isEnglish ) error = "\"" + token + "\": Operator expression is wrong.";
  else error = token + ":演算子表現が間違っています";
  break;
 case _CLIP_PROC_ERR_ARRAY:
  if( isEnglish ) error = "\"" + token + "\": Array representation is incorrect.";
  else error = token + ":配列表現が間違っています";
  break;
 case _CLIP_PROC_ERR_FUNCTION:
  if( isEnglish ) error = "Argument of function \"" + token + "\" is wrong.";
  else error = "関数" + token + "の引数が間違っています";
  break;
 case _CLIP_PROC_ERR_LVALUE:
  if( isEnglish ) error = "The left side of \"" + token + "\" must be a variable or an array.";
  else error = token + "の左辺は変数または配列でなければなりません";
  break;
 case _CLIP_PROC_ERR_RVALUE:
  if( isEnglish ) error = "The right side of \"" + token + "\" must be a variable or an array.";
  else error = token + "の右辺は変数または配列でなければなりません";
  break;
 case _CLIP_PROC_ERR_RVALUE_NULL:
  if( isEnglish ) error = "There is no right side of \"" + token + "\".";
  else error = token + "の右辺がありません";
  break;
 case _CLIP_PROC_ERR_CONDITIONAL:
  if( isEnglish ) error = "Two constant or variable are not specified on the right side of the ternary operator \"" + token + "\".";
  else error = "三項演算子" + token + "の右辺に定数または変数が2個指定されていません";
  break;
 case _CLIP_PROC_ERR_EXTFUNC:
  if( isEnglish ) error = "Execution of the external function \"" + token.slice( 1 ) + "\" was interrupted.";
  else error = "外部関数" + token.slice( 1 ) + "の実行が中断されました";
  break;
 case _CLIP_PROC_ERR_USERFUNC:
  if( isEnglish ) error = "Execution of function \"" + token + "\" was interrupted.";
  else error = "関数" + token + "の実行が中断されました";
  break;
 case _CLIP_PROC_ERR_CONSTANT:
  if( isEnglish ) error = "\"" + token + "\": Constant expression is wrong.";
  else error = token + ":定数表現が間違っています";
  break;
 case _CLIP_PROC_ERR_STRING:
  if( isEnglish ) error = "\"" + token + "\": String representation is incorrect.";
  else error = token + ":文字列表現が間違っています";
  break;
 case _CLIP_PROC_ERR_COMPLEX:
  if( isEnglish ) error = "\"" + token + "\": Wrong complex number representation.";
  else error = token + ":複素数表現が間違っています";
  break;
 case _CLIP_PROC_ERR_FRACT:
  if( isEnglish ) error = "\"" + token + "\": Fractional representation is incorrect.";
  else error = token + ":分数表現が間違っています";
  break;
 case _CLIP_PROC_ERR_ASS:
  if( isEnglish ) error = "Assignment to a constant by \"" + token + "\" is invalid.";
  else error = token + "による定数への代入は無効です";
  break;
 case _CLIP_PROC_ERR_CALL:
  if( isEnglish ) error = "Function call failed.";
  else error = "関数呼び出しに失敗しました";
  break;
 case _CLIP_PROC_ERR_EVAL:
  if( isEnglish ) error = "Execution of evaluation was interrupted.";
  else error = "evalの実行が中断されました";
  break;
 case _CLIP_PROC_ERR_MULTIPREC:
  if( isEnglish ) error = "\"" + token + "\": Multi-precision expression is wrong.";
  else error = token + ":多倍長数表現が間違っています";
  break;
 case _CLIP_PROC_ERR_STAT_IF:
  if( isEnglish ) error = "\"" + token + "\" too many nests.";
  else error = token + "のネスト数が多すぎます";
  break;
 case _CLIP_PROC_ERR_STAT_ENDIF:
  if( isEnglish ) error = "There is no \"if\" corresponding to \"" + token + "\".";
  else error = token + "に対応するifがありません";
  break;
 case _CLIP_PROC_ERR_STAT_SWITCH:
  if( isEnglish ) error = "\"" + token + "\" too many nests.";
  else error = token + "のネスト数が多すぎます";
  break;
 case _CLIP_PROC_ERR_STAT_ENDSWI:
  if( isEnglish ) error = "There is no \"switch\" corresponding to \"" + token + "\".";
  else error = token + "に対応するswitchがありません";
  break;
 case _CLIP_PROC_ERR_STAT_UNTIL:
  if( isEnglish ) error = "No \"do\" corresponding to \"" + token + "\".";
  else error = token + "に対応するdoがありません";
  break;
 case _CLIP_PROC_ERR_STAT_ENDWHILE:
  if( isEnglish ) error = "There is no \"while\" corresponding to \"" + token + "\".";
  else error = token + "に対応するwhileがありません";
  break;
 case _CLIP_PROC_ERR_STAT_FOR_CON:
  if( isEnglish ) error = "No condition part in \"" + token + "\".";
  else error = token + "における条件部がありません";
  break;
 case _CLIP_PROC_ERR_STAT_FOR_EXP:
  if( isEnglish ) error = "There is no update expression in \"" + token + "\".";
  else error = token + "における更新式がありません";
  break;
 case _CLIP_PROC_ERR_STAT_NEXT:
  if( isEnglish ) error = "There is no \"for\" corresponding to \"" + token + "\".";
  else error = token + "に対応するforがありません";
  break;
 case _CLIP_PROC_ERR_STAT_CONTINUE:
  if( isEnglish ) error = "\"" + token + "\" is invalid.";
  else error = token + "は無効です";
  break;
 case _CLIP_PROC_ERR_STAT_BREAK:
  if( isEnglish ) error = "\"" + token + "\" is invalid.";
  else error = token + "は無効です";
  break;
 case _CLIP_PROC_ERR_STAT_FUNC:
  if( isEnglish ) error = "Too many functions.";
  else error = "関数の数が多すぎます";
  break;
 case _CLIP_PROC_ERR_STAT_FUNC_NEST:
  if( isEnglish ) error = "Function can not be defined in function.";
  else error = "関数内で関数は定義できません";
  break;
 case _CLIP_PROC_ERR_STAT_ENDFUNC:
  if( isEnglish ) error = "There is no \"func\" corresponding to \"" + token + "\".";
  else error = token + "に対応するfuncがありません";
  break;
 case _CLIP_PROC_ERR_STAT_FUNCNAME:
  if( isEnglish ) error = "\"" + token + "\": Function name is invalid.";
  else error = token + ":関数名は無効です";
  break;
 case _CLIP_PROC_ERR_STAT_FUNCPARAM:
  if( isEnglish ) error = "\"" + token + "\": Label can not be set for function argument.";
  else error = token + ":関数の引数にラベル設定できません";
  break;
 case _CLIP_PROC_ERR_STAT_LOOP:
  if( isEnglish ) error = "Number of loops exceeded the upper limit.";
  else error = "ループ回数オーバーしました";
  break;
 case _CLIP_PROC_ERR_STAT_END:
  if( isEnglish ) error = "\"" + token + "\" is invalid.";
  else error = token + "は無効です";
  break;
 case _CLIP_PROC_ERR_COMMAND_NULL:
  if( isEnglish ) error = "The command is incorrect.";
  else error = "コマンドが間違っています";
  break;
 case _CLIP_PROC_ERR_COMMAND_PARAM:
  if( isEnglish ) error = "The argument of the command \"" + token.slice( 1 ) + "\" is incorrect.";
  else error = "コマンド" + token.slice( 1 ) + "の引数が間違っています";
  break;
 case _CLIP_PROC_ERR_COMMAND_DEFINE:
  if( isEnglish ) error = "\"" + token + "\" has already been defined.";
  else error = token + "は既に定義されています";
  break;
 case _CLIP_PROC_ERR_COMMAND_UNDEF:
  if( isEnglish ) error = "\"" + token + "\" is not defined.";
  else error = token + "は定義されていません";
  break;
 case _CLIP_PROC_ERR_COMMAND_PARAMS:
  if( isEnglish ) error = "You can only specify up to 10 arguments for the command \"" + token.slice( 1 ) + "\".";
  else error = "コマンド" + token.slice( 1 ) + "の引数は10個までしか指定できません";
  break;
 case _CLIP_PROC_ERR_COMMAND_RADIX:
  if( isEnglish ) error = "Command \"" + token.slice( 1 ) + "\" is invalid.";
  else error = "コマンド" + token.slice( 1 ) + "は無効です";
  break;
 case _CLIP_PROC_ERR_FUNC_OPEN:
  if( isEnglish ) error = "The external function \"" + token.slice( 1 ) + "\" can not be opened.";
  else error = "外部関数" + token.slice( 1 ) + "がオープンできません";
  break;
 case _CLIP_PROC_ERR_FUNC_PARANUM:
  if( isEnglish ) error = "Up to 10 arguments of external function can be specified.";
  else error = "外部関数の引数は10個までしか指定できません";
  break;
 case _CLIP_PROC_ERR_FUNC_PARACODE:
  if( isEnglish ) error = "\"token\": The argument of the external function must be a constant, variable or array name.";
  else error = token + ":外部関数の引数は定数、変数または配列名でなければなりません";
  break;
 case _CLIP_PROC_ERR_SE_NULL:
  if( isEnglish ) error = "The single expression is incorrect.";
  else error = "単一式が間違っています";
  break;
 case _CLIP_PROC_ERR_SE_OPERAND:
  if( isEnglish ) error = "Operand of the single expression is incorrect.";
  else error = "単一式のオペランドが間違っています";
  break;
 case _CLIP_PROC_ERR_SE_LOOPEND:
  if( isEnglish ) error = "No \"$LOOPSTART\" corresponding to \"$LOOPEND\".";
  else error = "$LOOPENDに対応する$LOOPSTARTがありません";
  break;
 case _CLIP_PROC_ERR_SE_LOOPCONT:
  if( isEnglish ) error = "No \"$LOOPSTART\" corresponding to \"$LOOPCONT\".";
  else error = "$LOOPCONTに対応する$LOOPSTARTがありません";
  break;
 case _CLIP_PROC_ERR_SE_CONTINUE:
  if( isEnglish ) error = "\"$CONTINUE\" is invalid.";
  else error = "$CONTINUEは無効です";
  break;
 case _CLIP_PROC_ERR_SE_BREAK:
  if( isEnglish ) error = "\"$BREAK\" is invalid.";
  else error = "$BREAKは無効です";
  break;
 }
 return error;
}
var procError;
var silentErr = false;
function EditExprToken( token ){
 this._token = token;
 this._before = null;
 this._next = null;
}
function EditExpr( id ){
 this._id = id;
 this._top = null;
 this._end = null;
 this._num = 0;
 this._cur = null;
 this._cursor = 0;
 this._disp = 2;
 this._forward = 0;
 this._scroll = 0;
 this._selAll = false;
 this._firstChars = "(*/+-%[&^|<>";
}
EditExpr.prototype = {
 setDispLen : function( dspLen, fwdLen ){
  this._disp = (dspLen < 2) ? 2 : dspLen;
  this._forward = (fwdLen < 0) ? 0 : fwdLen;
  if( this._forward >= this._disp ){
   this._forward = this._disp - 1;
  }
 },
 _searchList : function( num ){
  if( num < 0 ){
   return false;
  }
  var tmp = 0;
  this._cur = this._top;
  while( true ){
   if( this._cur == null ){
    return false;
   }
   if( tmp == num ){
    break;
   }
   tmp++;
   this._cur = this._cur._next;
  }
  return true;
 },
 _lastChar : function( str ){
  if( str.length == 0 ){
   return '';
  }
  return str.charAt( str.length - 1 );
 },
 lastChar : function(){
  if( !this._searchList( this._cursor - 1 ) ){
   return '';
  }
  return this._lastChar( this._cur._token );
 },
 lastCharNumber : function(){
  var chr = this.lastChar();
  chr = (chr.length == 0) ? 0 : chr.charCodeAt( 0 );
  if( (chr >= _CHAR_CODE_0) && (chr <= _CHAR_CODE_9) ){
   return true;
  }
  return false;
 },
 lastCharLower : function(){
  var chr = this.lastChar();
  chr = (chr.length == 0) ? 0 : chr.charCodeAt( 0 );
  if( (chr >= _CHAR_CODE_LA) && (chr <= _CHAR_CODE_LZ) ){
   return true;
  }
  return false;
 },
 lastCharUpper : function(){
  var chr = this.lastChar();
  chr = (chr.length == 0) ? 0 : chr.charCodeAt( 0 );
  if( (chr >= _CHAR_CODE_UA) && (chr <= _CHAR_CODE_UZ) ){
   return true;
  }
  return false;
 },
 add : function( token ){
  if( this._selAll ){
   this.delAll();
  }
  var tmp = new EditExprToken( token );
  if( this._top == null ){
   if( token == " " ){
    return;
   }
   this._top = tmp;
   this._end = tmp;
  } else {
   if( (token == " ") && (this._lastChar( this._end._token ) == ' ') ){
    return;
   }
   tmp._before = this._end;
   this._end._next = tmp;
   this._end = tmp;
  }
  this._num++;
  this._cursor = this._num;
 },
 ins : function( token ){
  if( this._selAll ){
   this.delAll();
  }
  if( !this._searchList( this._cursor ) ){
   this.add( token );
   return;
  }
  if( token == " " ){
   if( this._cur._before == null ){
    return;
   }
   if( (this._cur._token == " ") || (this._lastChar( this._cur._before._token ) == ' ') ){
    return;
   }
  }
  var tmp = new EditExprToken( token );
  tmp._before = this._cur._before;
  tmp._next = this._cur;
  if( this._cur._before != null ){
   this._cur._before._next = tmp;
  } else {
   this._top = tmp;
  }
  this._cur._before = tmp;
  this._num++;
  this._cursor++;
 },
 del : function(){
  if( this._selAll ){
   this.delAll();
   return;
  }
  if( !this._searchList( this._cursor - 1 ) ){
   this.forward();
   if( !this._searchList( this._cursor - 1 ) ){
    return;
   }
  }
  if( this._cur._before != null ){
   this._cur._before._next = this._cur._next;
  } else {
   this._top = this._cur._next;
  }
  if( this._cur._next != null ){
   this._cur._next._before = this._cur._before;
  } else {
   this._end = this._cur._before;
  }
  this._num--;
  this._cursor--;
 },
 delAll : function(){
  this._top = null;
  this._num = 0;
  this._cursor = 0;
  this._scroll = 0;
  this._unsetAll();
 },
 num : function(){
  return this._num;
 },
 token : function( index ){
  if( this._searchList( index ) ){
   return this._cur._token;
  }
  return null;
 },
 set : function( index, token ){
  if( this._searchList( index ) ){
   this._cur._token = token;
  }
 },
 top : function(){
  this._cursor = 0;
  this._unsetAll();
 },
 end : function(){
  this._cursor = this._num;
  this._unsetAll();
 },
 backward : function(){
  if( this._selAll ){
   this.top();
   return;
  }
  if( this._cursor > 0 ){
   this._cursor--;
  }
 },
 forward : function(){
  if( this._selAll ){
   this.end();
   return;
  }
  if( this._cursor < this._num ){
   this._cursor++;
  }
 },
 _unsetAll : function(){
  if( this._selAll ){
   onEditExprUpdateSelAll( this._id, false );
  }
  this._selAll = false;
 },
 selAll : function(){
  if( !this._selAll ){
   onEditExprUpdateSelAll( this._id, true );
  }
  this._selAll = true;
 },
 isSelAll : function(){
  return this._selAll;
 },
 get : function( forward , after , dispFlag ){
  if( dispFlag == undefined ){
   dispFlag = false;
  }
  var tmpToken = new _String();
  forward.set( "" );
  after .set( "" );
  var tmp = 0;
  var cur = this._top;
  while( cur != null ){
   if( tmp < this._cursor ){
    if( (this._lastChar( forward.str() ) == ' ') && (this._firstChars.indexOf( "" + cur._token.charAt( 0 ) ) >= 0) ){
     var str = forward.str();
     forward.set( str.substr( 0, str.length - 1 ) );
    }
    forward.add( cur._token );
   } else {
    if( (this._lastChar( after.str() ) == ' ') && (this._firstChars.indexOf( "" + cur._token.charAt( 0 ) ) >= 0) ){
     var str = after.str();
     after.set( str.substr( 0, str.length - 1 ) );
    }
    after.add( cur._token );
   }
   tmp++;
   cur = cur._next;
  }
  if( dispFlag ){
   if( forward.str().length - this._scroll >= this._disp ){
    this._scroll = forward.str().length - (this._disp - 1);
   }
   if( forward.str().length < this._scroll + this._forward ){
    this._scroll = forward.str().length - this._forward;
    if( this._scroll < 0 ){
     this._scroll = 0;
    }
   }
   forward.set( forward.str().slice( this._scroll ) );
   after.set( after.str().substring( 0, this._disp - forward.str().length ) );
  }
 },
 exportLog : function( expr ){
  var tmpToken = new _String();
  expr.set( "" );
  var tmp = 0;
  var cur = this._top;
  while( cur != null ){
   if( cur == this._end ){
    if( cur._token == " " ){
     break;
    }
   }
   if( expr.str().length != 0 ){
    expr.add( "," );
   }
   tmpToken.set( cur._token );
   tmpToken.replace( "\\", "\\\\" );
   tmpToken.replace( "," , "\\," );
   expr.add( tmpToken.str() );
   tmp++;
   cur = cur._next;
  }
 },
 importLog : function( expr ){
  var token = new String();
  var tmpToken = new _String();
  this.delAll();
  var top = 0;
  var cur = 0;
  while( cur < expr.length ){
   if( expr.charAt( cur ) == '\\' ){
    cur++;
    if( cur >= expr.length ){
     break;
    }
   } else if( expr.charAt( cur ) == ',' ){
    if( top != cur ){
     token = expr.substring( top, cur );
     tmpToken.set( token );
     tmpToken.replace( "\\," , "," );
     tmpToken.replace( "\\\\", "\\" );
     this.add( tmpToken.str() );
    }
    top = cur + 1;
   }
   cur++;
  }
  if( top < expr.length ){
   token = expr.slice( top );
   tmpToken.set( token );
   tmpToken.replace( "\\," , "," );
   tmpToken.replace( "\\\\", "\\" );
   this.add( tmpToken.str() );
  }
 }
};
var editExpr;
function ListBoxObj( obj ){
 this._obj = obj;
 this._before = null;
 this._next = null;
}
function ListBox( id ){
 this._e = document.getElementById( id );
 this._top = null;
 this._end = null;
 this._num = 0;
 this._index = 0;
 this._line = 1;
 this._scroll = 0;
}
ListBox.prototype = {
 element : function(){
  return this._e;
 },
 click : function( e, offsetY, lineHeight ){
  var top = 0;
  var tmp = this._e;
  while( tmp ){
   top += tmp.offsetTop;
   tmp = tmp.offsetParent;
  }
  var index = _DIV( e.clientY - offsetY - top, lineHeight );
  if( index < this._line ){
   this.setIndex( this._scroll + index );
   return true;
  }
  return false;
 },
 _searchList : function( num ){
  if( num < 0 ){
   return null;
  }
  var tmp = 0;
  var cur = this._top;
  while( true ){
   if( cur == null ){
    return null;
   }
   if( tmp == num ){
    break;
   }
   tmp++;
   cur = cur._next;
  }
  return cur;
 },
 add : function( obj ){
  var tmp = new ListBoxObj( obj );
  if( this._top == null ){
   this._top = tmp;
   this._end = tmp;
  } else {
   tmp._before = this._end;
   this._end._next = tmp;
   this._end = tmp;
  }
  this._num++;
  this._index = this._num - 1;
  this._updateScroll();
 },
 ins : function( index, obj ){
  var cur = this._searchList( index );
  if( cur == null ){
   this.add( obj );
   return;
  }
  this._index = index;
  this._updateScroll();
  var tmp = new ListBoxObj( obj );
  tmp._before = cur._before;
  tmp._next = cur;
  if( cur._before != null ){
   cur._before._next = tmp;
  } else {
   this._top = tmp;
  }
  cur._before = tmp;
  this._num++;
 },
 del : function( index ){
  var cur = this._searchList( index );
  if( cur == null ){
   return;
  }
  if( cur._before != null ){
   cur._before._next = cur._next;
  } else {
   this._top = cur._next;
  }
  if( cur._next != null ){
   cur._next._before = cur._before;
  } else {
   this._end = cur._before;
  }
  this._num--;
  if( this._index >= this._num ){
   this._index = this._num - 1;
  }
  if( this._index < 0 ){
   this._index = 0;
  }
  this._updateScroll();
 },
 delAll : function(){
  this._top = null;
  this._num = 0;
  this._index = 0;
  this._scroll = 0;
 },
 num : function(){
  return this._num;
 },
 obj : function( index ){
  var cur = this._searchList( index );
  if( cur != null ){
   return cur._obj;
  }
  return null;
 },
 set : function( index, obj ){
  var cur = this._searchList( index );
  if( cur != null ){
   cur._obj = obj;
  }
 },
 setLineNum : function( lineNum ){
  this._line = lineNum;
  if( this._line < 1 ){
   this._line = 1;
  }
 },
 lineNum : function(){
  return this._line;
 },
 setIndex : function( index ){
  this._index = index;
  if( this._index >= this._num ){
   this._index = this._num - 1;
  }
  if( this._index < 0 ){
   this._index = 0;
  }
  this._updateScroll();
 },
 index : function(){
  return this._index;
 },
 _updateScroll : function(){
  if( this._index - this._scroll < 0 ){
   this._scroll = this._index;
  }
  if( this._index - this._scroll >= this._line ){
   this._scroll = this._index - (this._line - 1);
  }
 },
 scroll : function(){
  return this._scroll;
 },
 up : function(){
  if( this._index > 0 ){
   this._index--;
   this._updateScroll();
  }
 },
 down : function(){
  if( this._index < this._num - 1 ){
   this._index++;
   this._updateScroll();
  }
 }
};
var logExpr;
var listImage;
function ListImageItem( url, x, y ){
 this._url = url;
 this._x = x;
 this._y = y;
}
var _editor_cursor_pos = 0;
var _editor_text = "";
var _editor_smart = true;
function setEditorSmartFlag( flag ){
 _editor_smart = flag;
}
function editorSmartFlag(){
 return _editor_smart;
}
function _Editor( id ){
 if( window.onEditorUpdateText == undefined ) window.onEditorUpdateText = function( len ){};
 this._textarea = document.getElementById( id );
 this._textarea.addEventListener( "input", _onEditorInput, false );
 this._textarea.addEventListener( "keydown", _onEditorKeyDown, false );
}
_Editor.prototype = {
 element : function(){
  return this._textarea;
 },
 text : function(){
  return this._textarea.value;
 },
 setText : function( text ){
  this._textarea.value = text;
  _editor_cursor_pos = this._textarea.selectionStart;
  _editor_text = this._textarea.value;
 }
};
function _onEditorInput( e ){
 var elem = e.target;
 var pos = elem.selectionStart;
 if( _editor_smart && (pos > 0) && (pos != _editor_cursor_pos) ){
  var val = elem.value;
  if( val.length > _editor_text.length ){
   if( isCharSpace( val, pos - 1 ) ){
    if( (pos == 1) || (val.charAt( pos - 2 ) == '\t') ){
     elem.value = val.substr( 0, pos - 1 ) + "\t" + val.slice( pos );
     elem.setSelectionRange( pos, pos );
    } else if( val.charAt( pos - 2 ) == '\n' ){
     var i;
     for( i = pos - 3; i >= 0; i-- ){
      if( val.charAt( i ) == '\n' ){
       break;
      }
     }
     i++;
     var tmp = "";
     while( val.charAt( i ) == '\t' ){
      tmp += "\t";
      i++;
     }
     if( tmp.length == 0 ){
      tmp = "\t";
     }
     elem.value = val.substr( 0, pos - 1 ) + tmp + val.slice( pos );
     elem.setSelectionRange( pos - 1 + tmp.length, pos - 1 + tmp.length );
    }
   } else if( val.charAt( pos - 1 ) == '\n' ){
    var i;
    for( i = pos - 2; i >= 0; i-- ){
     if( val.charAt( i ) == '\n' ){
      break;
     }
    }
    i++;
    var tmp = "";
    while( val.charAt( i ) == '\t' ){
     tmp += "\t";
     i++;
    }
    elem.value = val.substr( 0, pos ) + tmp + val.slice( pos );
    elem.setSelectionRange( pos + tmp.length, pos + tmp.length );
   }
  }
 }
 _editor_cursor_pos = elem.selectionStart;
 _editor_text = elem.value;
 onEditorUpdateText( _editor_text.length );
}
function _onEditorKeyDown( e ){
 var elem = e.target;
 if( e.keyCode == 9 ){
  e.preventDefault();
  var val = elem.value;
  var pos = elem.selectionStart;
  if( _editor_smart && (pos > 0) && (val.charAt( pos - 1 ) == '\n') ){
   var i;
   for( i = pos - 2; i >= 0; i-- ){
    if( val.charAt( i ) == '\n' ){
     break;
    }
   }
   i++;
   var tmp = "";
   while( val.charAt( i ) == '\t' ){
    tmp += "\t";
    i++;
   }
   if( tmp.length == 0 ){
    tmp = "\t";
   }
   elem.value = val.substr( 0, pos ) + tmp + val.slice( pos );
   elem.setSelectionRange( pos + tmp.length, pos + tmp.length );
  } else {
   elem.value = val.substr( 0, pos ) + "\t" + val.slice( pos );
   elem.setSelectionRange( pos + 1, pos + 1 );
  }
  _editor_text = elem.value;
  onEditorUpdateText( _editor_text.length );
 }
 _editor_cursor_pos = elem.selectionStart;
}
var editor;
var selFunc;
var curFunc;
var topProc;
var topParam;
var needGUpdate = false;
function _StringUtil(){
 this._fontSize = 0;
 this._fontFamily = "";
 this._text = document.createElement( "span" );
 this._textStyle = "visibility:hidden;position:absolute;left:0;top:0";
 this._text.style.cssText = this._textStyle;
 document.body.appendChild( this._text );
 this._h = "";
 this._e = "";
}
_StringUtil.prototype = {
 setFont : function( size, family ){
  this._fontSize = size;
  this._fontFamily = (family.indexOf( " " ) >= 0) ? "'" + family + "'" : family;
  this._text.style.cssText = this._textStyle + ";font:" + this._fontSize + "px " + this._fontFamily;
 },
 stringWidth : function( str ){
  this._text.innerHTML = "'";
  var tmp = this._text.offsetWidth;
  str = str.replace( new RegExp( "<", "igm" ), "&lt;" );
  str = str.replace( new RegExp( ">", "igm" ), "&gt;" );
  this._text.innerHTML = "'" + str + "'";
  return this._text.offsetWidth - tmp * 2;
 },
 fontHeight : function(){
  return this._fontSize;
 },
 trim : function( str ){
  var ret = "";
  var i;
  var top = 0;
  for( i = 0; i < str.length; i++ ){
   if( (str.charAt( i ) != " ") && (str.charAt( i ) != "　") ){
    break;
   }
   top++;
  }
  if( top < str.length ){
   var end = str.length - 1;
   for( i = end; i >= 0; i-- ){
    if( (str.charAt( i ) != " ") && (str.charAt( i ) != "　") ){
     break;
    }
    end--;
   }
   ret = str.substring( top, end + 1 );
  }
  return ret;
 },
 truncate : function( str, width, truncation ){
  if( this.stringWidth( str ) <= width ){
   return str;
  }
  width -= this.stringWidth( truncation );
  var ret = "";
  for( var i = 0; i < str.length; i++ ){
   ret += str.charAt( i );
   if( this.stringWidth( ret ) > width ){
    if( ret.length > 1 ){
     ret = ret.substring( 0, ret.length - 1 );
     break;
    }
   }
  }
  return ret + truncation;
 },
 setHeadWrap : function( str ){
  this._h = str;
 },
 setEndWrap : function( str ){
  this._e = str;
 },
 wrap : function( str, width ){
  var ret = new Array();
  var chr;
  var j = 0;
  ret[j] = "";
  for( var i = 0; i < str.length; i++ ){
   ret[j] += str.charAt( i );
   if( this.stringWidth( ret[j] ) > width ){
    if( ret[j].length > 1 ){
     ret[j] = ret[j].substring( 0, ret[j].length - 1 );
     i--;
     if( this._h.length > 0 ){
      while( true ){
       if( i + 1 < str.length ){
        chr = str.charAt( i + 1 );
        if( this._h.indexOf( chr ) >= 0 ){
         ret[j] += chr;
         i++;
        } else {
         break;
        }
       } else {
        break;
       }
      }
     }
     if( this._e.length > 0 ){
      while( true ){
       if( ret[j].length > 1 ){
        chr = ret[j].charAt( ret[j].length - 1 );
        if( this._e.indexOf( chr ) >= 0 ){
         ret[j] = ret[j].substring( 0, ret[j].length - 1 );
         i--;
        } else {
         break;
        }
       } else {
        break;
       }
      }
     }
    }
    j++;
    ret[j] = "";
   }
  }
  return ret;
 }
};
function Common(){
 var userAgent = window.navigator.userAgent;
 this._androidMobile = false;
 this._androidTablet = false;
 this._iPhone = false;
 this._iPad = false;
 if( userAgent.indexOf( "iPad" ) != -1 ){
  this._iPad = true;
 } else if( (userAgent.indexOf( "iPhone" ) != -1) || (userAgent.indexOf( "iPod" ) != -1) ){
  this._iPhone = true;
 } else if( userAgent.indexOf( "Android" ) != -1 ){
  if( userAgent.indexOf( "Mobile" ) != -1 ){
   this._androidMobile = true;
  } else {
   this._androidTablet = true;
  }
 }
 this._app = false;
 if( userAgent.lastIndexOf( " APP" ) == userAgent.length - 4 ){
  this._app = true;
 }
 this._su = new _StringUtil();
}
Common.prototype = {
 isAndroidMobile : function(){
  return this._androidMobile;
 },
 isAndroidTablet : function(){
  return this._androidTablet;
 },
 isIPhone : function(){
  return this._iPhone;
 },
 isIPad : function(){
  return this._iPad;
 },
 isPC : function(){
  return (!this._androidMobile && !this._androidTablet && !this._iPhone && !this._iPad);
 },
 isApp : function(){
  return this._app;
 },
 setFont : function( size, family ){
  this._su.setFont( size, family );
 },
 stringWidth : function( str ){
  return this._su.stringWidth( str );
 },
 fontHeight : function(){
  return this,_su.fontHeight();
 },
 truncate : function( str, width, truncation ){
  return this._su.truncate( str, width, truncation );
 },
 escape : function( str ){
  return (new _String( str )).escape().str();
 }
};
function cssGetPropertyValue( selector, property ){
 var i, j;
 var value = new String();
 var styleSheets = document.styleSheets;
 var styleSheet;
 var rules;
 var rule;
 for( i = 0; i < styleSheets.length; i++ ){
  styleSheet = styleSheets[i];
  rules = styleSheet.rules || styleSheet.cssRules;
  for( j = 0; j < rules.length; j++ ){
   rule = rules[j];
   if( rule.selectorText == selector ){
    value = rule.style.getPropertyValue( property );
   }
  }
 }
 return value;
}
function cssSetPropertyValue( selector, property, value ){
 var i, j;
 var styleSheets = document.styleSheets;
 var styleSheet;
 var rules;
 var rule;
 for( i = 0; i < styleSheets.length; i++ ){
  styleSheet = styleSheets[i];
  rules = styleSheet.rules || styleSheet.cssRules;
  for( j = 0; j < rules.length; j++ ){
   rule = rules[j];
   if( rule.selectorText == selector ){
    rule.style.setProperty( property, value );
   }
  }
 }
}
var _css_display_none = null;
var _css_display_block = null;
function cssLockStyleDisplay(){
 _css_display_none = new Array();
 _css_display_block = new Array();
}
function cssSetStyleDisplay( element, flag ){
 if( _css_display_none == null ){
  element.style.display = flag ? "block" : "none";
 } else if( flag ){
  _css_display_block[_css_display_block.length] = element;
 } else {
  _css_display_none[_css_display_none.length] = element;
 }
}
function cssSetStyleDisplayById( id, flag ){
 cssSetStyleDisplay( document.getElementById( id ), flag );
}
function cssUnlockStyleDisplay(){
 var i;
 for( i = 0; i < _css_display_none.length; i++ ){
  _css_display_none[i].style.display = "none";
 }
 for( i = 0; i < _css_display_block.length; i++ ){
  _css_display_block[i].style.display = "block";
 }
 _css_display_none = null;
 _css_display_block = null;
}
function cssSetButton( selector, gradientType, start, end, color, shadow, flag ){
 cssSetPropertyValue( selector, "background", "-webkit-gradient(" + gradientType + ",color-stop(0%," + start + "),color-stop(100%," + end + "))" );
 cssSetPropertyValue( selector, "color", color );
 cssSetPropertyValue( selector, "text-shadow", (flag ? "1px 1px " : "-1px -1px ") + shadow );
}
function cssSetSelect( selector, gradientType, start, end, color, shadow, flag ){
 cssSetPropertyValue( selector, "background", "-webkit-gradient(" + gradientType + ",color-stop(0%," + start + "),color-stop(100%," + end + "))" );
 cssSetPropertyValue( selector, "color", color );
 if( shadow.length > 0 ){
  cssSetPropertyValue( selector, "text-shadow", (flag ? "1px 1px " : "-1px -1px ") + shadow );
 } else {
  cssSetPropertyValue( selector, "text-shadow", "0 0" );
 }
}
function initSelect( id, selectedIndex ){
 var select = document.getElementById( id );
 for( var i = 0; i < select.options.length; i++ ){
  select.options[i].selected = (i == selectedIndex) ? true : false;
 }
}
function doButtonUpFloat( id, step, max ){
 var val = parseFloat( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (max == undefined) || (val < max) ){
   val += step;
   if( (max != undefined) && (val > max) ){
    val = max;
   }
   document.getElementById( id ).value = floatToStringPoint( val );
   return true;
  }
 }
 return false;
}
function doButtonDownFloat( id, step, min ){
 var val = parseFloat( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (min == undefined) || (val > min) ){
   val -= step;
   if( (min != undefined) && (val < min) ){
    val = min;
   }
   document.getElementById( id ).value = floatToStringPoint( val );
   return true;
  }
 }
 return false;
}
function doButtonUpInt( id, step, max ){
 var val = parseInt( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (max == undefined) || (val < max) ){
   val += step;
   if( (max != undefined) && (val > max) ){
    val = max;
   }
   document.getElementById( id ).value = "" + val;
   return true;
  }
 }
 return false;
}
function doButtonDownInt( id, step, min ){
 var val = parseInt( document.getElementById( id ).value );
 if( !_ISNAN( val ) ){
  if( (min == undefined) || (val > min) ){
   val -= step;
   if( (min != undefined) && (val < min) ){
    val = min;
   }
   document.getElementById( id ).value = "" + val;
   return true;
  }
 }
 return false;
}
function printUsage( token, proc, param, isEnglish, divId ){
 var usage = new String();
 if( token == "!" ){ usage = isEnglish ? "factorial" : "階乗"; }
 if( token == "e+" ){ usage = isEnglish ? "exponent part of floating point constant" : "浮動小数点定数の指数部"; }
 if( token == "e-" ){ usage = isEnglish ? "exponent part of floating point constant" : "浮動小数点定数の指数部"; }
 if( token == "d" ){ usage = isEnglish ? "degrees" : "度"; }
 if( token == "g" ){ usage = isEnglish ? "gradian" : "グラジアン"; }
 if( token == "r" ){ usage = isEnglish ? "radians" : "ラジアン"; }
 if( token == "h" ){ usage = isEnglish ? "hour" : "時"; }
 if( token == "m" ){ usage = isEnglish ? "min" : "分"; }
 if( token == "s" ){ usage = isEnglish ? "second" : "秒"; }
 if( token == "f" ){ usage = isEnglish ? "frame" : "フレーム"; }
 if( token == "_" ){ usage = isEnglish ? "fraction" : "分数"; }
 if( token == "i" ){ usage = isEnglish ? "imaginary part of complex number" : "複素数の虚数部"; }
 if( token == ":" ){ usage = isEnglish ? "time" : "時間"; }
 if( token == "\\" ){ usage = isEnglish ? "n-ary notation" : "n進表記"; }
 if( token == "b" ){ usage = isEnglish ? "in binary notation" : "2進表記"; }
 if( token == "x" ){ usage = isEnglish ? "hexadecimal notation" : "16進表記"; }
 if( token == "\\-" ){ usage = isEnglish ? "unary minus (for constant)" : "単項マイナス(定数用)"; }
 if( token == "\\+" ){ usage = isEnglish ? "unary plus (for constant)" : "単項プラス(定数用)"; }
 if( token == "[-]" ){ usage = isEnglish ? "unary minus" : "単項マイナス"; }
 if( token == "[~]" ){ usage = isEnglish ? "complement (unary operator)" : "補数(単項演算子)"; }
 if( token == "+" ){ usage = isEnglish ? "addition (binomial plus)" : "加算(二項プラス)"; }
 if( token == "-" ){ usage = isEnglish ? "subtraction (binomial minus)" : "減算(二項マイナス)"; }
 if( token == "*" ){ usage = isEnglish ? "multiplication" : "乗算"; }
 if( token == "/" ){ usage = isEnglish ? "division" : "除算"; }
 if( token == "%" ){ usage = isEnglish ? "modulo (remainder)" : "モジュロ(剰余)"; }
 if( token == "&" ){ usage = isEnglish ? "bitwise logical AND" : "ビット単位の論理積"; }
 if( token == "^" ){ usage = ((param._mode & _CLIP_MODE_INT) == 0) ? (isEnglish ? "power" : "累乗") : (isEnglish ? "bitwise exclusive OR" : "ビット単位の排他的論理和"); }
 if( token == "|" ){ usage = isEnglish ? "inclusive logical sum of bits" : "ビット単位の内包的論理和"; }
 if( token == "<<" ){ usage = isEnglish ? "shift left" : "左シフト"; }
 if( token == ">>" ){ usage = isEnglish ? "shift right" : "右シフト"; }
 if( token == "(" ){ usage = isEnglish ? "beginning of parenthesis indicating priority of operation" : "演算の優先順位を示す括弧の始まり"; }
 if( token == ")" ){ usage = isEnglish ? "end of parenthesis indicating the priority of operation" : "演算の優先順位を示す括弧の終わり"; }
 if( token == " " ){ usage = isEnglish ? "space" : "空白"; }
 if( token == "sin " ){ usage = "sin &lt;x&gt; : " + (isEnglish ? "sine" : "正弦"); }
 if( token == "cos " ){ usage = "cos &lt;x&gt; : " + (isEnglish ? "cosine" : "余弦"); }
 if( token == "tan " ){ usage = "tan &lt;x&gt; : " + (isEnglish ? "tangent" : "正接"); }
 if( token == "asin " ){ usage = "asin &lt;x&gt; : " + (isEnglish ? "arc sine" : "逆正弦"); }
 if( token == "acos " ){ usage = "acos &lt;x&gt; : " + (isEnglish ? "arc cosine" : "逆余弦"); }
 if( token == "atan " ){ usage = "atan &lt;x&gt; : " + (isEnglish ? "arc tangent" : "逆正接"); }
 if( token == "sinh " ){ usage = "sinh &lt;x&gt; : " + (isEnglish ? "hyperbolic sine" : "双曲線正弦"); }
 if( token == "cosh " ){ usage = "cosh &lt;x&gt; : " + (isEnglish ? "hyperbolic cosine" : "双曲線余弦"); }
 if( token == "tanh " ){ usage = "tanh &lt;x&gt; : " + (isEnglish ? "hyperbolic tangent" : "双曲線正接"); }
 if( token == "asinh " ){ usage = "asinh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic sine" : "逆双曲線正弦"); }
 if( token == "acosh " ){ usage = "acosh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic cosine" : "逆双曲線余弦"); }
 if( token == "atanh " ){ usage = "atanh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic tangent" : "逆双曲線正接"); }
 if( token == "ln " ){ usage = "ln &lt;x&gt; : " + (isEnglish ? "natural logarithm" : "自然対数"); }
 if( token == "log " ){ usage = "log &lt;x&gt; : " + (param._calculator ? (isEnglish ? "base 10 logarithm" : "底10の対数") : (isEnglish ? "natural logarithm" : "自然対数")); }
 if( token == "log10 " ){ usage = "log10 &lt;x&gt; : " + (isEnglish ? "base 10 logarithm" : "底10の対数"); }
 if( token == "exp " ){ usage = "exp &lt;x&gt; : " + (isEnglish ? "exponent" : "指数"); }
 if( token == "exp10 " ){ usage = "exp10 &lt;x&gt; : " + (isEnglish ? "base 10 exponent" : "底10の指数"); }
 if( token == "sqr " ){ usage = "sqr &lt;x&gt; : " + (isEnglish ? "squared" : "自乗"); }
 if( token == "sqrt " ){ usage = "sqrt &lt;x&gt; : " + (isEnglish ? "square root" : "平方根"); }
 if( token == "atan2 " ){ usage = "atan2 &lt;y&gt; &lt;x&gt; : " + (isEnglish ? "arc tangent of &lt;y&gt;/&lt;x&gt;" : "&lt;y&gt;/&lt;x&gt;の逆正接"); }
 if( token == "abs " ){ usage = "abs &lt;x&gt; : " + (isEnglish ? "absolute value" : "絶対値"); }
 if( token == "ceil " ){ usage = "ceil &lt;x&gt; : " + (isEnglish ? "the smallest integer greater than or equal to &lt;x&gt;" : "&lt;x&gt;以上の最小の整数"); }
 if( token == "floor " ){ usage = "floor &lt;x&gt; : " + (isEnglish ? "the largest integer less than or equal to &lt;x&gt;" : "&lt;x&gt;以下の最大の整数"); }
 if( token == "int " ){ usage = "int &lt;x&gt; : " + (isEnglish ? "integer" : "整数"); }
 if( token == "ldexp " ){ usage = "ldexp &lt;x&gt; &lt;exp&gt; : " + (isEnglish ? "calculate real numbers from mantissa &lt;x&gt; and exponent &lt;exp&gt;" : "仮数&lt;x&gt;と指数&lt;exp&gt;から実数を計算"); }
 if( token == "frexp " ){ usage = "frexp &lt;x&gt; &lt;var_exp&gt; : " + (isEnglish ? "returns the mantissa of &lt;x&gt;, stores the exponent in &lt;var_exp&gt;" : "&lt;x&gt;の仮数を返し、変数&lt;var_exp&gt;に指数を格納"); }
 if( token == "modf " ){ usage = "modf &lt;x&gt; &lt;var_int&gt; : " + (isEnglish ? "returns the fraction part of &lt;x&gt;, stores the integer part in &lt;var_int&gt;" : "&lt;x&gt;の小数部を返し、変数&lt;var_int&gt;に整数部を格納"); }
 if( token == "pow " ){ usage = "pow &lt;x&gt; &lt;y&gt; : " + (isEnglish ? "the &lt;y&gt; power of &lt;x&gt;" : "&lt;x&gt;の&lt;y&gt;乗"); }
 if( token == "fact " ){ usage = "fact &lt;x&gt; : " + (isEnglish ? "factorial of &lt;x&gt;" : "&lt;x&gt;の階乗"); }
 if( token == "num " ){ usage = "num &lt;x&gt; : " + (isEnglish ? "numerator of fraction" : "分数の分子"); }
 if( token == "denom " ){ usage = "denom &lt;x&gt; : " + (isEnglish ? "denominator of fraction" : "分数の分母"); }
 if( token == "real " ){ usage = "real &lt;x&gt; : " + (isEnglish ? "real part of complex number" : "複素数の実数部"); }
 if( token == "imag " ){ usage = "imag &lt;x&gt; : " + (isEnglish ? "imaginary part of complex number" : "複素数の虚数部"); }
 if( token == "arg " ){ usage = "arg &lt;x&gt; : " + (isEnglish ? "phase angle of complex number" : "複素数の位相角度"); }
 if( token == "norm " ){ usage = "norm &lt;x&gt; : " + (isEnglish ? "squared absolute value" : "絶対値の自乗"); }
 if( token == "conjg " ){ usage = "conjg &lt;x&gt; : " + (isEnglish ? "conjugate complex number" : "共役複素数"); }
 if( token == "polar " ){ usage = "polar &lt;rho&gt; &lt;t&gt; : " + (isEnglish ? "complex value of absolute value &lt;rho&gt; and phase angle &lt;t&gt;" : "絶対値&lt;rho&gt;、位相角度&lt;t&gt;の複素数値"); }
 if( token == "rand " ){ usage = "rand : " + (isEnglish ? "pseudorandom number" : "疑似乱数"); }
 if( token == "time " ){ usage = "time : " + (isEnglish ? "current time" : "現在の時刻"); }
 if( usage.length > 0 ){
  document.getElementById( divId ).innerHTML = usage;
 }
 if( (token.charAt( 0 ) == '!') && (token.charAt( token.length - 1 ) == ' ') ){
  var func = token.substring( 1, token.length - 1 );
  proc.usage( func, param, true );
 }
}
function getUrlParameter( key ){
 var ret = "";
 var start = location.href.indexOf( "?" + key + "=" );
 if( start < 0 ){
  start = location.href.indexOf( "&" + key + "=" );
 }
 if( start >= 0 ){
  start += key.length + 2;
  var end = location.href.indexOf( "&", start );
  if( end < 0 ){
   end = location.href.length;
  }
  ret = location.href.substring( start, end );
 }
 return decodeURIComponent( ret );
}
function _RGB( r, g, b ){
 if( r > 255 ) r = 255;
 if( g > 255 ) g = 255;
 if( b > 255 ) b = 255;
 if( r < 0 ) r = 0;
 if( g < 0 ) g = 0;
 if( b < 0 ) b = 0;
 return "#" + intToString( r, 16, 2 ) + intToString( g, 16, 2 ) + intToString( b, 16, 2 );
}
function RGB( r, g, b, flag ){
 this.r = r;
 this.g = g;
 this.b = b;
 this.f = (flag == undefined) ? 7 : flag;
}
RGB.prototype = {
 get : function( add ){
  var rr = ((this.f & 1) != 0) ? add : 0;
  var gg = ((this.f & 2) != 0) ? add : 0;
  var bb = ((this.f & 4) != 0) ? add : 0;
  return _RGB( this.r + rr, this.g + gg, this.b + bb );
 }
};
var GREEN_LIGHT = new RGB( 71,128,128);
var GREEN_DARK = new RGB( 76, 99, 99);
var GREEN_RED = new RGB(255, 96,112);
var GREEN_BLUE = new RGB(112,128,255);
var GREEN_EMERALD = new RGB( 37,218,219);
var GREEN_GRAY = new RGB(169,169,158);
var GREEN_SELECT = new RGB(192,192,192);
var GREEN_BG = _RGB( 98,143,189);
var GREEN_TEXT = _RGB(255,255,255);
var GREEN_SPAN = _RGB(255,255,255);
var GREEN_CHECKED = _RGB( 32,128,176);
var GRAY_LIGHT_1 = _RGB(112,112,120);
var GRAY_LIGHT_2 = _RGB(144,144,152);
var GRAY_DARK_1 = _RGB( 64, 64, 64);
var GRAY_DARK_2 = _RGB( 72, 72, 72);
var GRAY_RED_1 = _RGB(160, 0, 48);
var GRAY_RED_2 = _RGB(224, 0, 80);
var GRAY_SYSTEM = new RGB(192,192,192);
var GRAY_SELECT = new RGB(192,192,192);
var GRAY_BG = _RGB( 96, 96, 96);
var GRAY_TEXT = _RGB(224,224,224);
var GRAY_SPAN = _RGB(255,255,255);
var GRAY_CHECKED = _RGB( 32,128,176);
var PURPLE_BLUE_1 = _RGB(141,141,234);
var PURPLE_BLUE_2 = _RGB(100,100,141);
var PURPLE_GRAY_1 = _RGB(180,180,180);
var PURPLE_GRAY_2 = _RGB(121,121,121);
var PURPLE_SELECT = new RGB(192,192,192);
var PURPLE_BG = _RGB(110,110,130);
var PURPLE_TEXT = _RGB(255,255,255);
var PURPLE_SPAN = _RGB(255,255,255);
var PURPLE_CHECKED = _RGB( 32,128,176);
var GOLD_CHECKED = _RGB( 32,128,176);
var SILVER_CHECKED = _RGB( 32,128,176);
var IRON_CHECKED = _RGB( 32,128,176);
var COLOR = [
 [ 161,161,161,7 ],
 [ 160, 61, 54,7 ],
 [ 246,101,118,6 ],
 [ 255,144,255,2 ],
 [ 255,164, 26,6 ],
 [ 247,235, 88,4 ],
 [ 107,203, 52,3 ],
 [ 76,189,233,3 ],
 [ 87,109,197,3 ],
 [ 181,132,197,3 ],
 [ 161,161,161,7 ]
];
var COLOR_LIGHT;
var COLOR_DARK;
var COLOR_SYSTEM;
var COLOR_SELECT;
var COLOR_BG;
var COLOR_CHECKED;
var IMAGE_CHECKED;
function makeColor( i, editR, editG, editB ){
 if( i == COLOR.length - 1 ){
  COLOR[i][0] = parseInt( document.getElementById( editR ).value );
  COLOR[i][1] = parseInt( document.getElementById( editG ).value );
  COLOR[i][2] = parseInt( document.getElementById( editB ).value );
  COLOR[i][3] = 0;
  if( !skinLockR ) COLOR[i][3] += 1;
  if( !skinLockG ) COLOR[i][3] += 2;
  if( !skinLockB ) COLOR[i][3] += 4;
 }
 var r = COLOR[i][0];
 var g = COLOR[i][1];
 var b = COLOR[i][2];
 COLOR_BG = _RGB( r, g, b );
 var count = 0;
 if( (COLOR[i][3] & 1) != 0 ) count++;
 if( (COLOR[i][3] & 2) != 0 ) count++;
 if( (COLOR[i][3] & 4) != 0 ) count++;
 var offset = 40 - 8 * count;
 if( (COLOR[i][3] & 1) != 0 ) r += offset;
 if( (COLOR[i][3] & 2) != 0 ) g += offset;
 if( (COLOR[i][3] & 4) != 0 ) b += offset;
 COLOR_LIGHT = new RGB( r, g, b, COLOR[i][3] );
 if( (COLOR[i][3] & 1) != 0 ) r -= offset * 2;
 if( (COLOR[i][3] & 2) != 0 ) g -= offset * 2;
 if( (COLOR[i][3] & 4) != 0 ) b -= offset * 2;
 COLOR_DARK = new RGB( r, g, b, COLOR[i][3] );
 COLOR_SYSTEM = COLOR_LIGHT;
 COLOR_SELECT = COLOR_LIGHT;
 if( (COLOR[i][3] & 1) != 0 ) r -= offset * 2;
 if( (COLOR[i][3] & 2) != 0 ) g -= offset * 2;
 if( (COLOR[i][3] & 4) != 0 ) b -= offset * 2;
 COLOR_CHECKED = _RGB( r, g, b );
 IMAGE_CHECKED = ((r == g) && (g == b)) ? _RGB( 32,128,176) : COLOR_CHECKED;
}
var common;
function CalcUI( proc, param ){
 this._proc = proc;
 this._param = param;
 this._curVar = 0;
 this._mode = 0;
 this._bitType = 2;
 this._radix = 10;
 this._timeType = 2;
 this._fps = 30.0;
 this._checkTrig = 0x00;
 this._keepTrigFlag = false;
 this._reCalcModeFlag = true;
 this._reCalcAngleFlag = true;
 this._reCalcSTOFlag = true;
 this._sepType = 0;
 this._italic = false;
 this._funcCacheSize = -1;
 this._assertFlag = false;
 this._buttonSin = new String();
 this._buttonCos = new String();
 this._buttonTan = new String();
 this._buttonLog = new String();
 this._buttonLog10 = new String();
 this._buttonSqr = new String();
 onCalcInitEnv( this );
 this.setMode();
 this.setFuncCacheSize();
 this.setAssertFlag();
 this.updateTrigButton();
}
CalcUI.prototype = {
 setKeepTrigFlag : function( flag ){
  this._keepTrigFlag = flag;
 },
 keepTrigFlag : function(){
  return this._keepTrigFlag;
 },
 setReCalcModeFlag : function( flag ){
  this._reCalcModeFlag = flag;
 },
 reCalcModeFlag : function(){
  return this._reCalcModeFlag;
 },
 setReCalcAngleFlag : function( flag ){
  this._reCalcAngleFlag = flag;
 },
 reCalcAngleFlag : function(){
  return this._reCalcAngleFlag;
 },
 setReCalcSTOFlag : function( flag ){
  this._reCalcSTOFlag = flag;
 },
 reCalcSTOFlag : function(){
  return this._reCalcSTOFlag;
 },
 setSepType : function( type ){
  this._sepType = type;
  onCalcPrintAns();
 },
 sepType : function(){
  return this._sepType;
 },
 setItalic : function( flag ){
  this._italic = flag;
  onCalcPrintAns();
 },
 italic : function(){
  return this._italic;
 },
 setFuncCacheSize : function( size ){
  if( size != undefined ){
   this._funcCacheSize = size;
  }
  this._proc.setFuncCacheSize( this._funcCacheSize );
 },
 funcCacheSize : function(){
  return this._funcCacheSize;
 },
 setAssertFlag : function( flag ){
  if( flag != undefined ){
   this._assertFlag = flag;
  }
  this._proc.setAssertFlag( this._assertFlag );
 },
 assertFlag : function(){
  return this._assertFlag;
 },
 setMode : function( mode ){
  if( mode != undefined ){
   this._mode = mode;
  }
  switch( this._mode ){
  case 0:
   this._param.setMode( _CLIP_MODE_G_FLOAT );
   break;
  case 1:
   this._param.setMode( _CLIP_MODE_I_FRACT );
   break;
  case 2:
   this._param.setMode( _CLIP_MODE_M_FRACT );
   break;
  case 3:
   this._param.setMode( _CLIP_MODE_G_COMPLEX );
   break;
  case 4:
   switch( this._bitType ){
   case 0 : this._param.setMode( _CLIP_MODE_S_CHAR ); break;
   case 1: this._param.setMode( _CLIP_MODE_S_SHORT ); break;
   case 2: this._param.setMode( _CLIP_MODE_S_LONG ); break;
   }
   break;
  case 5:
   switch( this._bitType ){
   case 0 : this._param.setMode( _CLIP_MODE_U_CHAR ); break;
   case 1: this._param.setMode( _CLIP_MODE_U_SHORT ); break;
   case 2: this._param.setMode( _CLIP_MODE_U_LONG ); break;
   }
   break;
  case 6:
   switch( this._timeType ){
   case 0: this._param.setMode( _CLIP_MODE_H_TIME ); break;
   case 1: this._param.setMode( _CLIP_MODE_M_TIME ); break;
   case 2: this._param.setMode( _CLIP_MODE_S_TIME ); break;
   case 3: this._param.setMode( _CLIP_MODE_F_TIME ); break;
   }
   break;
  }
  if( this._reCalcModeFlag ){
   onCalcButtonEnter();
  }
 },
 setBitType : function( type ){
  this._bitType = type;
  this.setMode();
 },
 setRadix : function( radix ){
  if( _ISNAN( radix ) ){
   radix = 10;
  } else if( radix < 2 ){
   radix = 2;
  } else if( radix > 16 ){
   radix = 16;
  }
  this._radix = radix;
  this._param.setRadix( this._radix );
 },
 setTimeType : function( type ){
  this._timeType = type;
  this.setMode();
 },
 setFps : function( fps ){
  if( _ISNAN( fps ) || (fps <= 0.0) ){
   fps = 30.0;
  }
  this._fps = fps;
  this._param.setFps( this._fps );
 },
 setAngType : function( type ){
  this._proc.setAngType( type, false );
  if( this._reCalcAngleFlag ){
   onCalcButtonEnter();
  }
 },
 setCurVar : function( index ){
  this._curVar = index;
 },
 buttonSTO : function(){
  if( this._reCalcSTOFlag ){
   onCalcButtonEnter();
  }
  this._param.setVal( this._curVar, this._param.val( 0 ), true );
 },
 buttonRCL : function(){
  if( this._curVar == 0 ){
   return "Ans";
  } else {
   return "@" + String.fromCharCode( this._curVar );
  }
 },
 buttonMCL : function(){
  if( !(this._param.isZero( this._curVar )) ){
   this._param.setVal( this._curVar, 0.0, true );
   if( this._curVar == 0 ){
    this._param._array.setMatrix( 0, 0.0, true );
    onCalcPrintAns();
   }
  }
 },
 updateTrigButton : function(){
  switch( this._checkTrig ){
  case 0x00:
   this._buttonSin = "sin";
   this._buttonCos = "cos";
   this._buttonTan = "tan";
   break;
  case 0x01:
   this._buttonSin = "asin";
   this._buttonCos = "acos";
   this._buttonTan = "atan";
   break;
  case 0x02:
   this._buttonSin = "sinh";
   this._buttonCos = "cosh";
   this._buttonTan = "tanh";
   break;
  case (0x01 | 0x02):
   this._buttonSin = "asinh";
   this._buttonCos = "acosh";
   this._buttonTan = "atanh";
   break;
  }
  if( (this._checkTrig & 0x01) != 0 ){
   this._buttonLog = "exp";
   this._buttonLog10 = "exp10";
   this._buttonSqr = "sqrt";
  } else {
   this._buttonLog = this._param._calculator ? "ln" : "log";
   this._buttonLog10 = this._param._calculator ? "log" : "log10";
   this._buttonSqr = "sqr";
  }
  onCalcUpdateTrigButton( this );
 },
 clearInv : function(){
  if( (this._checkTrig & 0x01) != 0 ){
   this._checkTrig -= 0x01;
  }
  this.updateTrigButton();
 },
 clearInvHyp : function(){
  if( (this._checkTrig & 0x01) != 0 ){
   this._checkTrig -= 0x01;
  }
  if( (this._checkTrig & 0x02) != 0 ){
   this._checkTrig -= 0x02;
  }
  this.updateTrigButton();
 },
 checkInv : function(){
  if( (this._checkTrig & 0x01) != 0 ){
   this._checkTrig -= 0x01;
  } else {
   this._checkTrig |= 0x01;
  }
  this.updateTrigButton();
 },
 checkHyp : function(){
  if( (this._checkTrig & 0x02) != 0 ){
   this._checkTrig -= 0x02;
  } else {
   this._checkTrig |= 0x02;
  }
  this.updateTrigButton();
 },
 buttonSin : function(){
  var expr = new String();
  switch( this._checkTrig ){
  case 0x00: expr = "sin " ; break;
  case 0x01 : expr = "asin " ; break;
  case 0x02 : expr = "sinh " ; break;
  case (0x01 | 0x02): expr = "asinh "; break;
  }
  if( !(this._keepTrigFlag) ){
   this.clearInvHyp();
  }
  return expr;
 },
 buttonCos : function(){
  var expr = new String();
  switch( this._checkTrig ){
  case 0x00: expr = "cos " ; break;
  case 0x01 : expr = "acos " ; break;
  case 0x02 : expr = "cosh " ; break;
  case (0x01 | 0x02): expr = "acosh "; break;
  }
  if( !(this._keepTrigFlag) ){
   this.clearInvHyp();
  }
  return expr;
 },
 buttonTan : function(){
  var expr = new String();
  switch( this._checkTrig ){
  case 0x00: expr = "tan " ; break;
  case 0x01 : expr = "atan " ; break;
  case 0x02 : expr = "tanh " ; break;
  case (0x01 | 0x02): expr = "atanh "; break;
  }
  if( !(this._keepTrigFlag) ){
   this.clearInvHyp();
  }
  return expr;
 },
 buttonLog : function(){
  var expr = new String();
  if( this._checkTrig & 0x01 ){
   expr = "exp ";
  } else {
   expr = this._param._calculator ? "ln " : "log ";
  }
  if( !(this._keepTrigFlag) ){
   this.clearInv();
  }
  return expr;
 },
 buttonLog10 : function(){
  var expr = new String();
  if( this._checkTrig & 0x01 ){
   expr = "exp10 ";
  } else {
   expr = this._param._calculator ? "log " : "log10 ";
  }
  if( !(this._keepTrigFlag) ){
   this.clearInv();
  }
  return expr;
 },
 buttonSqr : function(){
  var expr = new String();
  if( this._checkTrig & 0x01 ){
   expr = "sqrt ";
  } else {
   expr = "sqr ";
  }
  if( !(this._keepTrigFlag) ){
   this.clearInv();
  }
  return expr;
 }
};
function _addCalcEventListener( target, event, func ){
 if( !!target.addEventListener ){
  target.addEventListener( event, func, false );
 } else if( !!target.attachEvent ){
  target.attachEvent( "on" + event, func );
 } else {
  target["on" + event] = func;
 }
}
function _addCalcEventListenerById( id, event, func ){
 _addCalcEventListener( document.getElementById( id ), event, func );
}
var calcUI;
function ConvUI( proc, param, isEnglish ){
 this._english = isEnglish;
 this._proc = proc;
 this._param = param;
 this._mode = 1;
 this._static1 = new String();
 this._static2 = new String();
 this._static3 = new String();
 this._static4 = new String();
 this._edit1 = new String();
 this._edit2 = new String();
 this._edit3 = new String();
 this._edit4 = new String();
 this.setMode();
}
ConvUI.prototype = {
 _setStatic : function(){
  switch( this._mode ){
  case 0:
   this._static1 = "BIN";
   this._static2 = "OCT";
   this._static3 = "DEC";
   this._static4 = "HEX";
   break;
  case 1:
   this._static1 = "Deg";
   this._static2 = "Rad";
   this._static3 = "Grad";
   this._static4 = "";
   break;
  case 2:
   this._static1 = this._english ? "Hour" : "時";
   this._static2 = this._english ? "Min" : "分";
   this._static3 = this._english ? "Sec" : "秒";
   this._static4 = this._english ? "Frame" : "ﾌﾚｰﾑ";
   break;
  }
  onConvUpdateStatic( this );
 },
 setEnglish : function( isEnglish ){
  this._english = isEnglish;
  this._setStatic();
 },
 setMode : function( mode ){
  if( mode != undefined ){
   this._mode = mode;
  }
  this._setStatic();
  this.update();
 },
 getRadixString : function( value, radix, string ){
  var param = new _Param( 0, this._param, false );
  param.setMode( this._param._mode );
  param.setRadix( radix );
  string.set( procToken().tokenString( param, _CLIP_CODE_CONSTANT, value ) );
  string.replace( "\\", "" );
  param.end();
 },
 getAngleString : function( value, oldType, newType, string ){
  var param = new _Param( 0, this._param, false );
  var tmpValue = new _Value();
  param.setMode( this._param._mode );
  param.setPrec( 0 );
  tmpValue.ass( value );
  tmpValue.angToAng( oldType, newType );
  string.set( procToken().tokenString( param, _CLIP_CODE_CONSTANT, tmpValue ) );
  string.replace( "\\", "" );
  param.end();
 },
 getTimeString : function( value, mode, string ){
  switch( mode & _CLIP_MODE_MASK ){
  case _CLIP_MODE_H_TIME:
   string.set( floatToString( value.toFloat() / 3600.0 ) );
   break;
  case _CLIP_MODE_M_TIME:
   string.set( floatToString( value.toFloat() / 60.0 ) );
   break;
  case _CLIP_MODE_S_TIME:
   string.set( floatToString( value.toFloat() ) );
   break;
  case _CLIP_MODE_F_TIME:
   string.set( floatToString( value.toFloat() * this._param._fps ) );
   break;
  }
 },
 getRadixValue : function( string, radix, value ){
  var param = new _Param( 0, this._param, false );
  param.setMode( this._param._mode );
  param.setRadix( radix );
  procToken().stringToValue( param, string, value );
  param.end();
 },
 getAngleValue : function( string, oldType, newType, value ){
  var param = new _Param( 0, this._param, false );
  param.setMode( this._param._mode );
  param.setPrec( 0 );
  procToken().stringToValue( param, string, value );
  value.angToAng( oldType, newType );
  param.end();
 },
 getTimeValue : function( string, mode, value ){
  var param = new _Param( 0, this._param, false );
  var tmpString = new String();
  tmpString = string;
  switch( mode & _CLIP_MODE_MASK ){
  case _CLIP_MODE_H_TIME: tmpString += "h"; break;
  case _CLIP_MODE_M_TIME: tmpString += "m"; break;
  case _CLIP_MODE_S_TIME: tmpString += "s"; break;
  case _CLIP_MODE_F_TIME: tmpString += "f"; break;
  }
  param.setMode( mode );
  param.setFps( this._param._fps );
  procToken().stringToValue( param, tmpString, value );
  param.end();
 },
 getValue : function( type, value ){
  switch( this._mode ){
  case 0:
   switch( type ){
   case 0x01: this.getRadixValue( this._edit1, 2, value ); break;
   case 0x02: this.getRadixValue( this._edit2, 8, value ); break;
   case 0x04: this.getRadixValue( this._edit3, 10, value ); break;
   case 0x08: this.getRadixValue( this._edit4, 16, value ); break;
   }
   break;
  case 1:
   var angType = new _Integer();
   var updateFlag = new _Boolean();
   this._proc.getAngType( angType, updateFlag );
   switch( type ){
   case 0x01: this.getAngleValue( this._edit1, _ANG_TYPE_DEG , angType._val, value ); break;
   case 0x02: this.getAngleValue( this._edit2, _ANG_TYPE_RAD , angType._val, value ); break;
   case 0x04: this.getAngleValue( this._edit3, _ANG_TYPE_GRAD, angType._val, value ); break;
   }
   break;
  case 2:
   switch( type ){
   case 0x01: this.getTimeValue( this._edit1, _CLIP_MODE_H_TIME, value ); break;
   case 0x02: this.getTimeValue( this._edit2, _CLIP_MODE_M_TIME, value ); break;
   case 0x04: this.getTimeValue( this._edit3, _CLIP_MODE_S_TIME, value ); break;
   case 0x08: this.getTimeValue( this._edit4, _CLIP_MODE_F_TIME, value ); break;
   }
   break;
  }
 },
 update : function( value, type ){
  if( value == undefined ){
   value = this._param.val( 0 );
  }
  if( type == undefined ){
   type = (0x01 | 0x02 | 0x04 | 0x08);
  }
  var tmpString = new _String();
  switch( this._mode ){
  case 0:
   if( (type & 0x01) != 0 ){
    this.getRadixString( value, 2, tmpString );
    this._edit1 = tmpString.str();
   }
   if( (type & 0x02) != 0 ){
    this.getRadixString( value, 8, tmpString );
    this._edit2 = tmpString.str();
   }
   if( (type & 0x04) != 0 ){
    this.getRadixString( value, 10, tmpString );
    this._edit3 = tmpString.str();
   }
   if( (type & 0x08) != 0 ){
    this.getRadixString( value, 16, tmpString );
    this._edit4 = tmpString.str();
   }
   break;
  case 1:
   var angType = new _Integer();
   var updateFlag = new _Boolean();
   this._proc.getAngType( angType, updateFlag );
   if( (type & 0x01) != 0 ){
    this.getAngleString( value, angType._val, _ANG_TYPE_DEG, tmpString );
    this._edit1 = tmpString.str();
   }
   if( (type & 0x02) != 0 ){
    this.getAngleString( value, angType._val, _ANG_TYPE_RAD, tmpString );
    this._edit2 = tmpString.str();
   }
   if( (type & 0x04) != 0 ){
    this.getAngleString( value, angType._val, _ANG_TYPE_GRAD, tmpString );
    this._edit3 = tmpString.str();
   }
   this._edit4 = "";
   break;
  case 2:
   if( (type & 0x01) != 0 ){
    this.getTimeString( value, _CLIP_MODE_H_TIME, tmpString );
    this._edit1 = tmpString.str();
   }
   if( (type & 0x02) != 0 ){
    this.getTimeString( value, _CLIP_MODE_M_TIME, tmpString );
    this._edit2 = tmpString.str();
   }
   if( (type & 0x04) != 0 ){
    this.getTimeString( value, _CLIP_MODE_S_TIME, tmpString );
    this._edit3 = tmpString.str();
   }
   if( (type & 0x08) != 0 ){
    this.getTimeString( value, _CLIP_MODE_F_TIME, tmpString );
    this._edit4 = tmpString.str();
   }
   break;
  }
  onConvUpdateEdit( this );
 }
};
var convUI = null;
function _NativeRequest(){
 this.e = document.createElement( "iframe" );
 this.e.setAttribute( "width", 0 );
 this.e.setAttribute( "height", 0 );
 this.e.setAttribute( "style", "position:absolute;left:0;top:0" );
 this.e.setAttribute( "scrolling", "no" );
 this.e.setAttribute( "frameborder", "no" );
 this.e.setAttribute( "src", "about:blank" );
 document.body.appendChild( this.e );
 this.s = "";
}
_NativeRequest.prototype = {
 setScheme : function( scheme ){
  this.s = scheme;
 },
 send : function( url ){
  if( this.s.length > 0 ){
   this.e.src = this.s + "://" + url;
  } else {
   this.e.src = url;
  }
 }
};
var nativeRequest = null;
var _preference;
var _enable_write_profile = false;
var _profile_prefix = new String();
function initProfile( useStorage ){
 _preference = new _Preference( useStorage );
}
function setEnableWriteProfile( flag ){
 _enable_write_profile = flag;
}
function setProfilePrefix( prefix ){
 _profile_prefix = prefix;
}
function getProfileString( key, subKey, defString ){
 return _preference.get( _profile_prefix + key + subKey, defString );
}
function getProfileInt( key, subKey, defValue ){
 return parseInt( getProfileString( key, subKey, "" + defValue ) );
}
function getProfileFloat( key, subKey, defValue ){
 return parseFloat( getProfileString( key, subKey, "" + defValue ) );
}
function writeProfileString( key, subKey, string ){
 if( !_enable_write_profile ){
  return;
 }
 _preference.set( _profile_prefix + key + subKey, string );
}
function writeProfileInt( key, subKey, value ){
 writeProfileString( key, subKey, "" + value );
}
function writeProfileFloat( key, subKey, value ){
 writeProfileString( key, subKey, "" + value );
}
function clearProfile( prefix ){
 _preference.clear( prefix );
}
function beginGetProfile( key ){
 _preference.beginRead( _profile_prefix + key );
}
function getProfile(){
 return _preference.read();
}
function endGetProfile(){
 _preference.endRead();
}
function beginWriteProfile(){
 if( !_enable_write_profile ){
  return;
 }
 _preference.beginWrite();
}
function writeProfile( str ){
 if( !_enable_write_profile ){
  return;
 }
 _preference.write( str );
}
function endWriteProfile( key ){
 if( !_enable_write_profile ){
  return;
 }
 _preference.endWrite( _profile_prefix + key );
}
function profileNum(){
 return _preference.num();
}
function getProfileKey( index ){
 return _preference.getKey( index );
}
function exportProfile(){
 var i, j;
 var tmp = new Array();
 var num2 = 0;
 var num = profileNum();
 for( i = 0; i < num; i++ ){
  var key = getProfileKey( i );
  if( (key != null) && (key.indexOf( _profile_prefix ) == 0) && (key.indexOf( _profile_prefix + "TMP_" ) != 0) ){
   key = key.slice( _profile_prefix.length );
   if( key.indexOf( "FUNC_" ) == 0 ){
    var tmpValue = new _String();
    tmpValue.set( getProfileString( key, "", "" ) );
    tmpValue.replace( "\\", "¥" );
    tmpValue.replace( "\t", "\\t" );
    tmpValue.replace( "\r", "\\r" );
    tmpValue.replace( "\n", "\\n" );
    tmp[num2] = key + "=" + tmpValue.str();
   } else {
    tmp[num2] = key + "=" + getProfileString( key, "", "" );
   }
   for( j = 0; j < num2; j++ ){
    if( tmp[j] == tmp[num2] ){
     break;
    }
   }
   if( j >= num2 ){
    num2++;
   }
  }
 }
 var text = new String();
 for( i = 0; i < num2; i++ ){
  text += tmp[i] + "\n";
 }
 return text;
}
function doExportProfile( textarea ){
 document.getElementById( textarea ).value = exportProfile();
 doButtonUIProfile( true );
}
function splitData( data ){
 var dataLen = data.length;
 while( dataLen > 0 ){
  if( !isCharEnter( data, dataLen - 1 ) ){
   break;
  }
  dataLen--;
 }
 data = data.substr( 0, dataLen );
 var data2 = new _String( data );
 data2.replaceNewLine();
 if( data2.str().indexOf( "\n" ) < 0 ){
  var tmp = new Array();
  tmp[0] = data2.str();
  return tmp;
 }
 var data3 = data2.str().split( "\n" );
 for( var i = 0; i < data3.length; i++ ){
  for( var j = 0; j < data3[i].length; j++ ){
   if( !isCharSpace( data3[i], j ) && (data3[i].charAt( j ) != '\t') ){
    data3[i] = data3[i].slice( j );
    break;
   }
  }
 }
 return data3;
}
function importProfile( text ){
 var i, j;
 var profile = splitData( text );
 for( i = 0; i < profile.length; i++ ){
  j = profile[i].indexOf( "=" );
  if( j > 0 ){
   var key = profile[i].substring( 0, j );
   var value = profile[i].slice( j + 1 );
   var valueLen = value.length;
   while( valueLen > 0 ){
    if( !isCharSpace( value, valueLen - 1 ) && (value.charAt( valueLen - 1 ) != '\t') ){
     break;
    }
    valueLen--;
   }
   value = value.substr( 0, valueLen );
   if( key.indexOf( "FUNC_" ) == 0 ){
    var tmpValue = new _String();
    tmpValue.set( value );
    tmpValue.replace( "\\t", "\t" );
    tmpValue.replace( "\\r", "\r" );
    tmpValue.replace( "\\n", "\n" );
    tmpValue.replace( "¥" , "\\" );
    value = tmpValue.str();
   }
   writeProfileString( key, "", value );
  }
 }
}
function doImportProfile( textarea ){
 importProfile( document.getElementById( textarea ).value );
 location.replace( "index.html?menu=option" );
}
function doClearStorage( button ){
 if( canUseStorage() ){
  document.getElementById( button ).disabled = true;
  clearStorage( _profile_prefix + "TMP_" );
  if( electron != null ){
   electron.clearExtFunc();
  }
  location.replace( "index.html?menu=option" );
 }
}
function doClearCookie( button ){
 if( canUseCookie() ){
  document.getElementById( button ).disabled = true;
  clearCookie( _profile_prefix + "TMP_" );
  if( electron != null ){
   electron.clearExtFunc();
  }
  location.replace( "index.html?menu=option" );
 }
}
var _key_state = 0;
var _key_array = new Array();
_key_array[0] = 16;
_key_array[1] = 17;
function setKeyArray( array ){
 var len = array.length;
 _key_array = new Array();
 for( var i = 0; i < len; i++ ){
  _key_array[i] = array[i];
 }
}
function keyBit( key ){
 var len = _key_array.length;
 for( var i = 0; i < len; i++ ){
  if( _key_array[i] == key ){
   return _SHIFTL( 1, i );
  }
 }
 return 0;
}
function keyDown( e ){
 var k = keyBit( e.keyCode );
 if( _AND( _key_state, k ) == 0 ){
  _key_state += k;
 }
 if( onKeyDown( e.keyCode ) ){
  e.preventDefault();
 }
}
function keyUp( e ){
 var k = keyBit( e.keyCode );
 if( _AND( _key_state, k ) != 0 ){
  _key_state -= k;
 }
 if( onKeyUp( e.keyCode ) ){
  e.preventDefault();
 }
}
var keyShiftOnly = false;
function Electron( main ){
 this._main = main;
 try {
  this._extfunc = JSON.parse( this._main.fs.readFileSync( this._main.extFuncCachePath, "utf8" ) );
 } catch( e ){
  this._extfunc = {};
 }
 this._extfunc_update = false;
 this._extfunc_val = "";
 this._extfunc_s = 0;
 this._extfunc_str = "";
}
Electron.prototype = {
 version : function(){
  return this._main.version;
 },
 isEnglish : function(){
  return this._main.isEnglish;
 },
 platform : function(){
  return this._main.platform;
 },
 extFuncKeyNum : function(){
  return Object.keys( this._extfunc ).length;
 },
 extFuncKey : function( index ){
  return Object.keys( this._extfunc )[index];
 },
 getExtFunc : function( key, defString ){
  var string = this._extfunc[key];
  return (string == undefined) ? defString : string;
 },
 setExtFunc : function( key, string ){
  this._extfunc[key] = string;
  this._extfunc_update = true;
 },
 clearExtFunc : function(){
  this._extfunc = {};
  this._extfunc_update = true;
  this.applyExtFunc();
 },
 beginReadExtFunc : function( key ){
  this._extfunc_val = this.getExtFunc( key, "" );
  this._extfunc_s = 0;
 },
 readExtFunc : function(){
  if( this._extfunc_s >= this._extfunc_val.length ){
   this._extfunc_str = "";
  } else {
   var e = this._extfunc_val.indexOf( "&", this._extfunc_s );
   if( e < 0 ){
    e = this._extfunc_val.length;
   }
   this._extfunc_str = this._extfunc_val.substring( this._extfunc_s, e );
   this._extfunc_s = e + 1;
  }
  return unescape( this._extfunc_str );
 },
 endReadExtFunc : function(){
  this._extfunc_val = "";
  this._extfunc_str = "";
 },
 beginWriteExtFunc : function(){
  this._extfunc_val = "";
 },
 writeExtFunc : function( str ){
  if( this._extfunc_val.length > 0 ){
   this._extfunc_val += "&";
  }
  this._extfunc_val += escape( str );
 },
 endWriteExtFunc : function( key ){
  this.setExtFunc( key, this._extfunc_val );
  this._extfunc_val = "";
 },
 applyExtFunc : function(){
  if( this._extfunc_update ){
   this._extfunc_update = false;
   try {
    this._main.fs.writeFileSync( this._main.extFuncCachePath, JSON.stringify( this._extfunc ) );
   } catch( e ){}
  }
 },
 clipboardRead : function(){
  return this._main.clipboard.readText();
 },
 clipboardWrite : function( text ){
  this._main.clipboard.writeText( text );
 },
 beep : function(){
  this._main.shell.beep();
 },
 readProfile : function(){
  try {
   return this._main.fs.readFileSync( this._main.profilePath, "utf8" );
  } catch( e ){
  }
  return "";
 },
 writeProfile : function( text ){
  try {
   this._main.fs.writeFileSync( this._main.profilePath, text );
  } catch( e ){}
 }
};
var electron = null;
function __Audio(){
 this.element = null;
 this.state = 0;
 this.volume = 100;
}
function loadAudio( src ){
 try {
  var audio = new __Audio();
  audio.element = new Audio( "" );
  audio.element.autoplay = false;
  audio.element.src = src;
  audio.element.load();
  return audio;
 } catch( e ){}
 return null;
}
function isAudioLoaded( audio ){
 if( audio != null ){
  try {
   if( audio.element.readyState >= 4 ){
    return true;
   }
  } catch( e ){}
 }
 return false;
}
function playAudio( audio ){
 if( audio != null ){
  if( audio.state == 1 ){
   try {
    if( !audio.element.ended ){
     audio.element.pause();
     audio.element.currentTime = 0;
    }
   } catch( e ){}
  }
  try {
   audio.element.loop = false;
   audio.element.play();
   audio.state = 1;
  } catch( e ){}
 }
}
var clipboardFlag = false;
var clipboardProc = false;
var clipboardText = "";
var clipboardBeepFlag = false;
var clipboardAudio;
var divEdit;
var buttonMode = 0;
var usageFlag = true;
var englishFlag = false;
var skin;
var skinColor;
var skinAns;
var skinLockR, skinLockG, skinLockB;
var skinTrans;
var skinImage;
var fontSpan;
var fontEdit;
var soundType;
var menu = -1;
var lastTouchEnd = 0;
function isAndroidTablet(){
 return (androidTabletTest || common.isAndroidTablet());
}
function isIPad(){
 return (iPadTest || common.isIPad());
}
function printAppVersion( version ){
 var saveStarted = started;
 started = false;
 con[0].println( "ClipCalc" + version + consoleBreak() + "Copyright (C) SatisKia" );
 con[0].setColor( "0000ff" );
 if( dispUserAgent ){
  con[0].setBold( true );
  con[0].print( "UserAgent: " );
  con[0].setBold( false );
  con[0].println( window.navigator.userAgent );
 }
 if( electron != null ){
  con[0].setBold( true );
  con[0].print( "Platform: " );
  con[0].setBold( false );
  con[0].println( electron.platform() );
 } else {
  con[0].setBold( true );
  con[0].print( "App: " );
  con[0].setBold( false );
  con[0].println( common.isApp() ? "true" : "false" );
 }
 con[0].setColor();
 started = saveStarted;
}
function main( editId, logId, _conId, _errId, selectImageId, canvasId, inputFileIds, editorId ){
 var i;
 defGWorldFunction( window );
 defProcFunction( window );
 conId = _conId;
 con[0] = new _Console( _conId );
 con[0].setMaxLen( conMaxLen );
 errId = _errId;
 con[1] = new _Console( _errId );
 con[1].setMaxLen( errMaxLen );
 try {
  electron = new Electron( require( "electron" ).remote.require( "./electron" ) );
  window.onbeforeunload = function(){
   electron.writeProfile( exportProfile() );
  };
 } catch( e ){
  electron = null;
 }
 common = new Common();
 if( common.isIPhone() || common.isIPad() ){
  document.documentElement.addEventListener( "touchstart", function( e ){
   if( e.touches.length > 1 ){
    e.preventDefault();
   }
  }, true );
  document.documentElement.addEventListener( "touchend", function( e ){
   var now = (new Date()).getTime();
   if( now - lastTouchEnd <= 500 ){
    e.preventDefault();
   }
   lastTouchEnd = now;
  }, true );
  if( common.isApp() ){
   useStorage = false;
  }
 }
 initProfile( useStorage );
 setProfilePrefix( "_CLIPCALC_" );
 if( electron != null ){
  var text = electron.readProfile();
  if( text.length > 0 ){
   setEnableWriteProfile( true );
   importProfile( text );
   setEnableWriteProfile( false );
  }
 }
 if( isAndroidTablet() || isIPad() ){
  cssSetPropertyValue( ".div_body" , "width" , "357px" );
  cssSetPropertyValue( ".div_body" , "height", "471px" );
  cssSetPropertyValue( ".div_selectimage" , "height", "387px" );
  cssSetPropertyValue( ".textarea_profile", "height", "415px" );
 }
 skin = getProfileInt( "ENV_", "Skin" , 0 ); if( skin > 7 ) skin = 7;
 skinColor = getProfileInt( "ENV_", "SkinColor", 0 ); if( skinColor >= COLOR.length ) skinColor = 0;
 skinAns = getProfileInt( "ENV_", "SkinAns" , 0 ); if( skinAns > 6 ) skin = 0;
 document.getElementById( "calc_edit_r" ).value = getProfileInt( "ENV_", "SkinColorR", 161 );
 document.getElementById( "calc_edit_g" ).value = getProfileInt( "ENV_", "SkinColorG", 161 );
 document.getElementById( "calc_edit_b" ).value = getProfileInt( "ENV_", "SkinColorB", 161 );
 skinLockR = (getProfileInt( "ENV_", "SkinLockR", 0 ) == 1);
 skinLockG = (getProfileInt( "ENV_", "SkinLockG", 0 ) == 1);
 skinLockB = (getProfileInt( "ENV_", "SkinLockB", 0 ) == 1);
 document.getElementById( "check_color_r" ).checked = skinLockR;
 document.getElementById( "check_color_g" ).checked = skinLockG;
 document.getElementById( "check_color_b" ).checked = skinLockB;
 skinTrans = getProfileInt( "ENV_", "SkinTrans", 0 ); if( skinTrans > 5 ) skin = 0;
 skinImage = getProfileString( "ENV_", "SkinImage", "" );
 document.getElementById( "calc_edit_skin_image" ).value = skinImage;
 document.getElementById( "calc_edit_x" ).value = getProfileString( "ENV_", "SkinImageX", "50" );
 document.getElementById( "calc_edit_y" ).value = getProfileString( "ENV_", "SkinImageY", "50" );
 makeColor( skinColor, "calc_edit_r", "calc_edit_g", "calc_edit_b" );
 updateSkin();
 updateSkinAns();
 initSelect( "calc_select_skin" , skin );
 initSelect( "calc_select_skin_color", skinColor );
 initSelect( "calc_select_skin_ans" , skinAns );
 initSelect( "calc_select_skin_trans", skinTrans );
 cssSetStyleDisplayById( "calc_select_skin_color", skin == 6 );
 cssSetStyleDisplayById( "calc_select_skin_trans", skin == 7 );
 cssSetStyleDisplayById( "input_skin_color" , (skin == 6) && (skinColor == COLOR.length - 1) );
 cssSetStyleDisplayById( "input_skin_image" , skin == 7 );
 fontSpan = getProfileString( "ENV_", "FontSpan", "Helvetica" );
 fontEdit = getProfileString( "ENV_", "FontEdit", "Courier New" );
 updateFont();
 usageFlag = (getProfileInt( "ENV_", "PrintUsage", 1 ) == 1);
 updateButtonHeight();
 englishFlag = (getProfileInt( "ENV_", "Language", 0 ) == 1);
 updateLanguage();
 soundType = getProfileInt( "ENV_", "Sound", 0 );
 updateSoundType();
 clipboardBeepFlag = (getProfileInt( "ENV_", "ClipboardBeep", 0 ) == 1);
 divEdit = document.getElementById( editId );
 regGWorldDefCharInfo( 0 );
 regGWorldDefCharInfoLarge( 1 );
 regGWorldBgColor( 0xC0C0C0 );
 setCanvasEnv( new _CanvasEnv() );
 canvas = new _Canvas( canvasId );
 canvasClear();
 inputFile = new Array();
 for( i = 0; i < inputFileIds.length; i++ ){
  inputFile[i] = new _InputFile( inputFileIds[i][0], inputFileIds[i][1] );
 }
 procError = new _ProcError();
 editExpr = new EditExpr( 1 );
 editExpr.setDispLen( (electron != null) ? 27 : 28, 8 );
 logExpr = new ListBox( logId );
 logExpr.setLineNum( 12 );
 _addCalcEventListener( logExpr.element(), "click", function( e ){
  if( logExpr.click( e, 0, 20 ) ){
   updateLogExpr();
  }
 });
 listImage = new ListBox( selectImageId );
 listImage.setLineNum( (isAndroidTablet() || isIPad()) ? 19 : 21 );
 _addCalcEventListener( listImage.element(), "click", function( e ){
  if( listImage.click( e, 0, 20 ) ){
   updateListImage();
   getListImage();
  }
 });
 setDefineValue();
 setProcEnv( new _ProcEnv() );
 topProc = new _Proc( _PROC_DEF_PARENT_MODE, _PROC_DEF_PARENT_MP_PREC, _PROC_DEF_PARENT_MP_ROUND, true, _PROC_DEF_PRINT_ASSERT, _PROC_DEF_PRINT_WARN, _PROC_DEF_GUPDATE_FLAG );
 setProcWarnFlowFlag( true );
 setProcLoopMax( loopMax );
 topParam = new _Param();
 topParam.setPrec( 0 );
 topParam._enableCommand = false;
 topParam._enableOpPow = true;
 topParam._enableStat = false;
 topParam._var._label.setLabel( 0 , "Ans", true );
 setGlobalParam( topParam );
 initProc();
 srand( time() );
 rand();
 calcUI = new CalcUI( topProc, topParam );
 convUI = new ConvUI( topProc, topParam, englishFlag );
 getProfileExpr();
 updateEditExpr();
 getProfileLogExpr();
 updateLogExpr();
 getProfileVar();
 updateSelectVar();
 getProfileImage();
 selListImage( skinImage, document.getElementById( "calc_edit_x" ).value, document.getElementById( "calc_edit_y" ).value );
 updateCalcRadioMode();
 updateCalcRadioBitType();
 updateCalcEditRadix();
 updateCalcRadioTimeType();
 updateCalcEditFps();
 updateCalcRadioAngType();
 updateCalcRadioSepType();
 updateConvMode();
 doButtonUIMain();
 initSelect( "calc_select_mode", calcUI._mode );
 initSelect( "calc_select_bit", calcUI._bitType );
 initSelect( "calc_select_time", calcUI._timeType );
 initSelect( "calc_select_var", 0 );
 updateButton();
 document.getElementById( "check_keep_trig" ).checked = calcUI.keepTrigFlag();
 document.getElementById( "check_italic" ).checked = calcUI.italic();
 document.getElementById( "check_recalc_mode" ).checked = calcUI.reCalcModeFlag();
 document.getElementById( "check_recalc_angle" ).checked = calcUI.reCalcAngleFlag();
 document.getElementById( "check_recalc_sto" ).checked = calcUI.reCalcSTOFlag();
 document.getElementById( "check_print_usage" ).checked = usageFlag;
 document.getElementById( "check_calculator" ).checked = topParam._calculator;
 document.getElementById( "check_clipboard_beep" ).checked = clipboardBeepFlag;
 var event = common.isPC() ? "mousedown" : "touchstart";
 var elements;
 _addCalcEventListenerById( "button_cursor_top", event, topEditExpr );
 _addCalcEventListenerById( "button_cursor_end", event, endEditExpr );
 _addCalcEventListenerById( "button_cursor_backward", event, backwardEditExpr );
 _addCalcEventListenerById( "button_cursor_forward", event, forwardEditExpr );
 _addCalcEventListenerById( "button_del", event, delEditExpr );
 _addCalcEventListenerById( "button_del_all", event, delAllEditExpr );
 _addCalcEventListenerById( "button_0", event, doButton0 );
 _addCalcEventListenerById( "button_1", event, doButton1 );
 _addCalcEventListenerById( "button_2", event, doButton2 );
 _addCalcEventListenerById( "button_3", event, doButton3 );
 _addCalcEventListenerById( "button_4", event, doButton4 );
 _addCalcEventListenerById( "button_5", event, doButton5 );
 _addCalcEventListenerById( "button_6", event, doButton6 );
 _addCalcEventListenerById( "button_7", event, doButton7 );
 _addCalcEventListenerById( "button_8", event, doButton8 );
 _addCalcEventListenerById( "button_9", event, doButton9 );
 _addCalcEventListenerById( "button_a", event, doButtonA );
 _addCalcEventListenerById( "button_b", event, doButtonB );
 _addCalcEventListenerById( "button_c", event, doButtonC );
 _addCalcEventListenerById( "button_d", event, doButtonD );
 _addCalcEventListenerById( "button_e", event, doButtonE );
 _addCalcEventListenerById( "button_f", event, doButtonF );
 _addCalcEventListenerById( "button_point", event, doButtonPoint );
 _addCalcEventListenerById( "button_plus", event, doButtonPlus );
 _addCalcEventListenerById( "button_minus", event, doButtonMinus );
 _addCalcEventListenerById( "button_space", event, doButtonSpace );
 _addCalcEventListenerById( "button_eplus", event, doButtonEPlus );
 _addCalcEventListenerById( "button_eminus", event, doButtonEMinus );
 _addCalcEventListenerById( "button_fract", event, doButtonFract );
 _addCalcEventListenerById( "button_i", event, doButtonI );
 _addCalcEventListenerById( "button_time", event, doButtonTime );
 _addCalcEventListenerById( "button_mul", event, doButtonMul );
 _addCalcEventListenerById( "button_div", event, doButtonDiv );
 _addCalcEventListenerById( "button_mod", event, doButtonMod );
 _addCalcEventListenerById( "button_add", event, doButtonAdd );
 _addCalcEventListenerById( "button_sub", event, doButtonSub );
 _addCalcEventListenerById( "button_shiftl", event, doButtonShiftL );
 _addCalcEventListenerById( "button_shiftr", event, doButtonShiftR );
 _addCalcEventListenerById( "button_complement", event, doButtonComplement );
 _addCalcEventListenerById( "button_unary_minus", event, doButtonUnaryMinus );
 _addCalcEventListenerById( "button_and", event, doButtonAND );
 _addCalcEventListenerById( "button_xor", event, doButtonXOR );
 _addCalcEventListenerById( "button_or", event, doButtonOR );
 _addCalcEventListenerById( "button_deg", event, doButtonDeg );
 _addCalcEventListenerById( "button_grad", event, doButtonGrad );
 _addCalcEventListenerById( "button_rad", event, doButtonRad );
 _addCalcEventListenerById( "button_esc", event, doButtonEsc );
 _addCalcEventListenerById( "button_bin", event, doButtonBIN );
 _addCalcEventListenerById( "button_hex", event, doButtonHEX );
 _addCalcEventListenerById( "button_hour", event, doButtonHour );
 _addCalcEventListenerById( "button_min", event, doButtonMin );
 _addCalcEventListenerById( "button_sec", event, doButtonSec );
 _addCalcEventListenerById( "button_frame", event, doButtonFrame );
 _addCalcEventListenerById( "button_factorial1", event, doButtonFactorial );
 _addCalcEventListenerById( "button_factorial2", event, doButtonFactorial );
 _addCalcEventListenerById( "button_pow1", event, doButtonPow );
 _addCalcEventListenerById( "button_pow2", event, doButtonPow );
 _addCalcEventListenerById( "button_lang", "click", doButtonLang );
 elements = document.getElementsByName( "button_shift" );
 for( i = 0; i < elements.length; i++ ){
  _addCalcEventListener( elements[i], "click", doButtonSHIFT );
 }
 _addCalcEventListenerById( "button_sin", "click", doButtonSin );
 _addCalcEventListenerById( "button_cos", "click", doButtonCos );
 _addCalcEventListenerById( "button_tan", "click", doButtonTan );
 _addCalcEventListenerById( "button_log", "click", doButtonLog );
 _addCalcEventListenerById( "button_log10", "click", doButtonLog10 );
 _addCalcEventListenerById( "button_sqr", "click", doButtonSqr );
 elements = document.getElementsByName( "button_func" );
 for( i = 0; i < elements.length; i++ ){
  _addCalcEventListener( elements[i], "click", doButtonFunc );
 }
 _addCalcEventListenerById( "button_top", event, doButtonTop );
 _addCalcEventListenerById( "button_end", event, doButtonEnd );
 _addCalcEventListenerById( "button_sto", event, doButtonSTO );
 _addCalcEventListenerById( "button_rcl", event, doButtonRCL );
 _addCalcEventListenerById( "button_mcl", event, doButtonMCL );
 _addCalcEventListenerById( "button_enter", "click", doButtonEnter );
 _addCalcEventListenerById( "button_radix_down", event, doCalcDownRadix );
 _addCalcEventListenerById( "button_radix_up" , event, doCalcUpRadix );
 _addCalcEventListenerById( "button_fps_down" , event, doCalcDownFps );
 _addCalcEventListenerById( "button_fps_up" , event, doCalcUpFps );
 _addCalcEventListenerById( "button_log_up" , event, upLogExpr );
 _addCalcEventListenerById( "button_log_down", event, downLogExpr );
 _addCalcEventListenerById( "button_log_del" , event, delLogExpr );
 _addCalcEventListenerById( "button_edit_r_up" , event, doButtonEditRUp );
 _addCalcEventListenerById( "button_edit_r_down", event, doButtonEditRDown );
 _addCalcEventListenerById( "button_edit_g_up" , event, doButtonEditGUp );
 _addCalcEventListenerById( "button_edit_g_down", event, doButtonEditGDown );
 _addCalcEventListenerById( "button_edit_b_up" , event, doButtonEditBUp );
 _addCalcEventListenerById( "button_edit_b_down", event, doButtonEditBDown );
 _addCalcEventListenerById( "button_edit_x_up" , event, doButtonEditXUp );
 _addCalcEventListenerById( "button_edit_x_down", event, doButtonEditXDown );
 _addCalcEventListenerById( "button_edit_y_up" , event, doButtonEditYUp );
 _addCalcEventListenerById( "button_edit_y_down", event, doButtonEditYDown );
 _addCalcEventListenerById( "button_selectimage_up" , event, upListImage );
 _addCalcEventListenerById( "button_selectimage_down", event, downListImage );
 _addCalcEventListenerById( "button_selectimage_del" , event, delListImage );
 _addCalcEventListenerById( "button_edit_tab_up" , event, doButtonEditTabUp );
 _addCalcEventListenerById( "button_edit_tab_down", event, doButtonEditTabDown );
 onCalcPrintAns();
 if( electron != null ){
  clipboardAudio = loadAudio( audioFile[0] );
  cssSetStyleDisplayById( "calc_clipboard", true );
  cssSetPropertyValue( ".div_edit", "width", "294px" );
  cssSetStyleDisplayById( "calc_clipboard_beep", true );
 } else {
  cssSetPropertyValue( ".div_edit", "width", "316px" );
 }
 if( !common.isApp() ){
  if( useStorage && canUseStorage() ){
   cssSetStyleDisplayById( "button_storage_clear", true );
  } else if( canUseCookie() ){
   cssSetStyleDisplayById( "button_cookie_clear", true );
  }
 }
 if( !common.isPC() ){
  cssSetStyleDisplayById( "button_profile_export", true );
  cssSetStyleDisplayById( "button_profile_import", true );
 }
 if( !common.isPC() ){
  cssSetStyleDisplayById( "calc_radio_sound", true );
 }
 if( common.isApp() ){
  cssSetStyleDisplayById( "button_getcontent", true );
 }
 if( common.isPC() ){
  cssSetStyleDisplayById( "calc_input_loadimage", true );
 }
 if( getUrlParameter( "menu" ) == "option" ){
  doButtonUIOption();
 }
 if( dispCache ){
  if( canUseStorage() ){
   var num = storageNum();
   con[0].setColor( "0000ff" );
   con[0].setBold( true );
   con[0].print( "Storage: " );
   con[0].setBold( false );
   con[0].println( "" + num );
   con[0].setColor();
   for( i = 0; i < num; i++ ){
    var key = getStorageKey( i );
    con[0].print( "<b>[" + key + "]</b> " );
    con[0].println( common.escape( getStorage( key, "" ) ) );
   }
  }
  if( canUseCookie() ){
   var num = cookieNum();
   con[0].setColor( "0000ff" );
   con[0].setBold( true );
   con[0].print( "Cookie: " );
   con[0].setBold( false );
   con[0].println( "" + num );
   con[0].setColor();
   for( i = 0; i < num; i++ ){
    var key = getCookieKey( i );
    con[0].print( "<b>[" + key + "]</b> " );
    con[0].println( common.escape( getCookie( key, "" ) ) );
   }
  }
 }
 loadExtFuncFile();
 for( i = 0; i < extFuncFile.length; i++ ){
  var name = extFuncName( extFuncFile[i] );
  if( name.length > 0 ){
   regExtFuncButton( name.toLowerCase() );
  }
 }
 loadExtFuncFile2();
 for( i = 0; i < extFuncFile2.length; i++ ){
  var name = extFuncName( extFuncFile2[i] );
  if( name.length > 0 ){
   regExtFuncButton( name.toLowerCase() );
  }
 }
 editor = new _Editor( editorId );
 var tabWidth = getProfileInt( "EDITOR_", "Tab", 4 );
 if( tabWidth < 0 ){
  tabWidth = 0;
 }
 document.getElementById( "tab_width" ).value = "" + tabWidth;
 cssSetPropertyValue( ".textarea_func", "tab-size", "" + tabWidth );
 var smart = (getProfileInt( "EDITOR_", "Smart", 1 ) == 1);
 document.getElementById( "check_smart" ).checked = smart;
 setEditorSmartFlag( smart );
 selFunc = getProfileInt( "EDITOR_", "SelFunc", 0 );
 initSelect( "calc_select_func", selFunc );
 curFunc = document.getElementById( "calc_select_func" ).options[selFunc].value;
 loadFunc();
 updateSelectFunc();
 setEnableWriteProfile( true );
 if( resetCalculator ){
  changeExpr();
  writeProfileInt( "ENV_", "Calculator", topParam._calculator ? 1 : 0 );
 }
 started = true;
 if( !common.isPC() ){
  nativeRequest = new _NativeRequest();
  nativeRequest.setScheme( "native" );
  nativeRequest.send( "started" );
 } else {
  var version = "";
  if( electron != null ){
   version = " " + electron.version();
  }
  printAppVersion( version );
 }
 if( nativeRequest ){
  nativeRequest.send( "start_load_extfunc/" + extFuncFile[loadNum] );
 }
 _addCalcEventListener( document, "keydown", keyDown );
 _addCalcEventListener( document, "keyup", keyUp );
 if( electron != null ){
  setEnglish( electron.isEnglish() );
 }
 if( androidTabletTest || iPadTest || (bodyHeight != defHeight( false )) ){
  setHeight( bodyHeight );
 }
}
function watchClipboard(){
 if( clipboardFlag ){
  var text = electron.clipboardRead();
  if( text.length > 0 ){
   var len = text.length;
   while( len > 0 ){
    var chr = text.charAt( len - 1 );
    if( chr == '\r' || chr == '\n' ){
     len--;
    } else {
     break;
    }
   }
   if( len == 0 ){
    text = "";
   } else if( len != text.length ){
    text = text.substring( 0, len );
   }
  }
  if( text != clipboardText ){
   clipboardText = text;
   editExpr.delAll();
   var tmp = (new _String()).set( clipboardText ).replaceNewLine( ";" ).replaceMulti( ";;", ";" ).str();
   for( var i = 0; i < tmp.length; i++ ){
    editExpr.ins( "" + tmp.charAt( i ) );
   }
   writeProfileExpr();
   updateEditExpr();
   clipboardProc = true;
   onCalcButtonEnter();
   clipboardProc = false;
  }
  window.setTimeout( watchClipboard, 100 );
 }
}
function doCheckClipboard(){
 if( electron != null ){
  clipboardFlag = clipboardFlag ? false : true;
  if( clipboardFlag ){
   clipboardText = "";
   electron.clipboardWrite( clipboardText );
   watchClipboard();
  }
 }
}
function doCheckClipboardBeep(){
 clipboardBeepFlag = document.getElementById( "check_clipboard_beep" ).checked;
 writeProfileInt( "ENV_", "ClipboardBeep", clipboardBeepFlag ? 1 : 0 );
}
function sound(){
 if( soundType != 0 ){
  if( nativeRequest ){
   nativeRequest.send( (soundType == 1) ? "sound" : "vibrate" );
  }
 }
}
function updateSoundType(){
 document.getElementById( "sound_type_0" ).checked = (soundType == 0);
 document.getElementById( "sound_type_1" ).checked = (soundType == 1);
 document.getElementById( "sound_type_2" ).checked = (soundType == 2);
}
function doSoundType0(){
 soundType = 0;
 updateSoundType();
 writeProfileInt( "ENV_", "Sound", soundType );
}
function doSoundType1(){
 soundType = 1;
 updateSoundType();
 writeProfileInt( "ENV_", "Sound", soundType );
}
function doSoundType2(){
 soundType = 2;
 updateSoundType();
 writeProfileInt( "ENV_", "Sound", soundType );
}
function setDeviceWidth( width ){
 if( isAndroidTablet() ){
  document.querySelector( "meta[name='viewport']" ).setAttribute( "content", "target-densitydpi=device-dpi, width=357, user-scalable=no" );
 }
 if( isIPad() ){
  var scale = "" + (width / 357.0);
  scale = scale.substring( 0, 5 );
  document.querySelector( "meta[name='viewport']" ).setAttribute( "content", "target-densitydpi=device-dpi, width=357, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no" );
 }
}
function defHeight( mainFlag ){
 var height = (isAndroidTablet() || isIPad()) ? 471 : 506;
 if( mainFlag && !usageFlag ){
  height -= 40;
 }
 return height;
}
function updateButtonHeight(){
 if( bodyHeight >= defHeight( true ) ){
  var add = _DIV( bodyHeight - defHeight( true ), 10 );
  var height29 = 29 + add;
  var height35 = 35 + add;
  var height70 = height35 * 2;
  cssSetPropertyValue( ".height29", "height", "" + height29 + "px" );
  cssSetPropertyValue( ".height35", "height", "" + height35 + "px" );
  cssSetPropertyValue( ".height70", "height", "" + height70 + "px" );
  document.getElementById( "td_mode" ).setAttribute( "height", "" + height35 );
  document.getElementById( "td_angle" ).setAttribute( "height", "" + height35 );
  document.getElementById( "td_trig" ).setAttribute( "height", "" + height35 );
  document.getElementById( "td_calculator" ).setAttribute( "height", "" + height35 );
 }
}
function setHeight( height ){
 bodyHeight = height;
 var saveStarted = started;
 started = false;
 con[0].setColor( "0000ff" );
 con[0].setBold( true );
 con[0].print( "Height: " );
 con[0].setBold( false );
 con[0].println( "" + bodyHeight );
 con[0].setColor();
 started = saveStarted;
 if( bodyHeight > defHeight( false ) ){
  cssSetPropertyValue( ".div_body", "height", "" + bodyHeight + "px" );
 }
 updateButtonHeight();
 var editorHeight = 0;
 if( isAndroidTablet() ){
  editorHeight = bodyHeight - 227;
 } else if( !androidTabletTest && common.isAndroidMobile() ){
  editorHeight = bodyHeight - 255 - 39;
 } else if( isIPad() ){
  editorHeight = bodyHeight - 145;
 } else if( !iPadTest && common.isIPhone() ){
  editorHeight = bodyHeight - 261;
 }
 if( editorHeight > 0 ){
  cssSetPropertyValue( ".textarea_func", "height", "" + editorHeight + "px" );
 }
}
var cursorText;
var cursorBack;
function updateSkin(){
 var element = document.getElementById( "calc_body" );
 element.classList.remove( "bg_gold" );
 element.classList.remove( "bg_silver" );
 element.classList.remove( "bg_iron" );
 element.classList.remove( "bg_image" );
 switch( skin ){
 case 0:
  cssSetPropertyValue( ".div_body", "background-color", GREEN_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", GREEN_RED.get( 16 ), GREEN_RED.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", GREEN_BLUE.get( 16 ), GREEN_BLUE.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_sto" , "linear,left top,left bottom", GREEN_EMERALD.get( 16 ), GREEN_EMERALD.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_invhyp", "linear,left top,left bottom", GREEN_DARK.get( 16 ), GREEN_DARK.get( -16 ), GREEN_TEXT, "#202020", false );
  cssSetButton( ".button_number", "linear,left top,left bottom", GREEN_DARK.get( 16 ), GREEN_DARK.get( -16 ), GREEN_TEXT, "#202020", false );
  cssSetButton( ".button_op" , "linear,left top,left bottom", GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
  cssSetPropertyValue( ".span_symbol", "color", GREEN_TEXT );
  cssSetSelect( ".select_common", "linear,left top,left bottom", GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", GREEN_SPAN );
  cssSetPropertyValue( ".div_usage", "color", GREEN_SPAN );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GREEN_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", GREEN_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_error" , "background-color", "#C0C0C0" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = GREEN_CHECKED;
  break;
 case 1:
  cssSetPropertyValue( ".div_body", "background-color", GRAY_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetButton( ".button_del" , "linear,left top,left bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_rcl" , "linear,left top,right bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_sto" , "linear,left top,right bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_enter" , "linear,left top,right bottom", GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_func" , "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetButton( ".button_invhyp", "linear,left top,right bottom", GRAY_LIGHT_1, GRAY_LIGHT_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_number", "linear,left top,right bottom", GRAY_LIGHT_1, GRAY_LIGHT_2, GRAY_TEXT, "#404040", false );
  cssSetButton( ".button_op" , "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetButton( ".button_symbol", "linear,left top,right bottom", GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
  cssSetPropertyValue( ".span_symbol", "color", GRAY_TEXT );
  cssSetSelect( ".select_common", "linear,left top,left bottom", GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", GRAY_SPAN );
  cssSetPropertyValue( ".div_usage", "color", GRAY_SPAN );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GRAY_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", GRAY_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_error" , "background-color", "#C0C0C0" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = GRAY_CHECKED;
  break;
 case 2:
  cssSetPropertyValue( ".div_body", "background-color", PURPLE_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_sto" , "linear,left top,left bottom", PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_invhyp", "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_number", "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_op" , "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
  cssSetPropertyValue( ".span_symbol", "color", PURPLE_TEXT );
  cssSetSelect( ".select_common", "linear,left top,left bottom", PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", PURPLE_SPAN );
  cssSetPropertyValue( ".div_usage", "color", PURPLE_SPAN );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", PURPLE_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", PURPLE_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_error" , "background-color", "#C0C0C0" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = PURPLE_CHECKED;
  break;
 case 3:
 case 4:
 case 5:
  switch( skin ){
  case 3:
   document.getElementById( "calc_body" ).classList.add( "bg_gold" );
   cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GOLD_CHECKED );
   cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", GOLD_CHECKED );
   cursorText = "#FFFFFF";
   cursorBack = GOLD_CHECKED;
   break;
  case 4:
   document.getElementById( "calc_body" ).classList.add( "bg_silver" );
   cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", SILVER_CHECKED );
   cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", SILVER_CHECKED );
   cursorText = "#FFFFFF";
   cursorBack = SILVER_CHECKED;
   break;
  case 5:
   document.getElementById( "calc_body" ).classList.add( "bg_iron" );
   cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IRON_CHECKED );
   cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", IRON_CHECKED );
   cursorText = "#FFFFFF";
   cursorBack = IRON_CHECKED;
   break;
  }
  cssSetButton( ".button_common", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_sto" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_invhyp", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_number", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_op" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
  cssSetPropertyValue( ".span_symbol", "color", "#000000" );
  cssSetSelect( ".select_common", "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", "#000000" );
  cssSetPropertyValue( ".div_usage", "color", "#000000" );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_error" , "background-color", "#C0C0C0" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  break;
 case 6:
  cssSetPropertyValue( ".div_body", "background-color", COLOR_BG );
  cssSetButton( ".button_common", "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_sto" , "linear,left top,left bottom", COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_func" , "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_invhyp", "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_number", "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_op" , "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
  cssSetPropertyValue( ".span_symbol", "color", "#000000" );
  cssSetSelect( ".select_common", "linear,left top,left bottom", COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
  cssSetPropertyValue( ".span" , "color", "#000000" );
  cssSetPropertyValue( ".div_usage", "color", "#000000" );
  cssSetPropertyValue( ".span" , "text-shadow", "0 0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", COLOR_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", COLOR_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_log" , "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
  cssSetPropertyValue( ".div_error" , "background-color", "#C0C0C0" );
  cssSetPropertyValue( ".div_console" , "background-color", "#C0C0C0" );
  cursorText = "#FFFFFF";
  cursorBack = COLOR_CHECKED;
  break;
 case 7:
  cssSetPropertyValue( ".bg_image", "background-image", "url(\"" + skinImage + "\")" );
  cssSetPropertyValue( ".bg_image", "background-position", document.getElementById( "calc_edit_x" ).value + "% " + document.getElementById( "calc_edit_y" ).value + "%" );
  document.getElementById( "calc_body" ).classList.add( "bg_image" );
  cssSetPropertyValue( ".div_body", "background-color", COLOR_BG );
  var color = "rgba(255,255,255,0.0)";
  switch( skinTrans ){
  case 0: break;
  case 1: color = "rgba(255,255,255,0.1)"; break;
  case 2: color = "rgba(255,255,255,0.2)"; break;
  case 3: color = "rgba(255,255,255,0.3)"; break;
  case 4: color = "rgba(255,255,255,0.4)"; break;
  case 5: color = "rgba(255,255,255,0.5)"; break;
  }
  cssSetButton( ".button_common", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_cursor", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_menu2" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_shift" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_topend", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_del" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_rcl" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_sto" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_enter" , "linear,left top,left bottom", color, color, "#FF0000", "#A0A0A0", false );
  cssSetButton( ".button_func" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_invhyp", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_number", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_op" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetButton( ".button_symbol", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetPropertyValue( ".span_symbol", "color", "#000000" );
  cssSetSelect( ".select_common", "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetSelect( ".select_var" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetSelect( ".select_func" , "linear,left top,left bottom", color, color, "#000000", "#E0E0E0", true );
  cssSetPropertyValue( ".span" , "color", "#000000" );
  cssSetPropertyValue( ".div_usage", "color", "#000000" );
  cssSetPropertyValue( ".span" , "text-shadow", "1px 1px #E0E0E0" );
  cssSetPropertyValue( ".div_usage", "text-shadow", "1px 1px #E0E0E0" );
  cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IMAGE_CHECKED );
  cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after" , "background", IMAGE_CHECKED );
  cssSetPropertyValue( ".div_edit" , "background-color", "rgba(255,255,255,0.0)" );
  cssSetPropertyValue( ".div_log" , "background-color", "rgba(255,255,255,0.0)" );
  cssSetPropertyValue( ".div_selectimage", "background-color", "rgba(255,255,255,0.0)" );
  cssSetPropertyValue( ".div_error" , "background-color", "rgba(255,255,255,0.0)" );
  cssSetPropertyValue( ".div_console" , "background-color", "rgba(255,255,255,0.0)" );
  cursorText = "#FFFFFF";
  cursorBack = IMAGE_CHECKED;
  break;
 }
}
function updateSkinAns(){
 switch( skinAns ){
 case 0:
  cssSetPropertyValue( ".div_ans", "background-color", (skin == 7) ? "rgba(255,255,255,0.0)" : "#C0F080" );
  cssSetPropertyValue( ".span_ans", "color", "#000000" );
  break;
 case 1:
  cssSetPropertyValue( ".div_ans", "background-color", (skin == 7) ? "rgba(255,255,255,0.0)" : "#000000" );
  cssSetPropertyValue( ".span_ans", "color", _RGB( 0, 255, 0 ) );
  break;
 case 2:
  cssSetPropertyValue( ".div_ans", "background-color", (skin == 7) ? "rgba(255,255,255,0.0)" : "#000000" );
  cssSetPropertyValue( ".span_ans", "color", _RGB( 255, 160, 0 ) );
  break;
 case 3:
  cssSetPropertyValue( ".div_ans", "background-color", (skin == 7) ? "rgba(255,255,255,0.0)" : "#000000" );
  cssSetPropertyValue( ".span_ans", "color", _RGB( 0, 255, 255 ) );
  break;
 case 4:
  cssSetPropertyValue( ".div_ans", "background-color", (skin == 7) ? "rgba(255,255,255,0.0)" : "#000000" );
  cssSetPropertyValue( ".span_ans", "color", _RGB( 255, 0, 255 ) );
  break;
 case 5:
  cssSetPropertyValue( ".div_ans", "background-color", (skin == 7) ? "rgba(255,255,255,0.0)" : "#000000" );
  cssSetPropertyValue( ".span_ans", "color", _RGB( 255, 255, 0 ) );
  break;
 case 6:
  cssSetPropertyValue( ".div_ans", "background-color", (skin == 7) ? "rgba(255,255,255,0.0)" : "#000000" );
  cssSetPropertyValue( ".span_ans", "color", _RGB( 255, 255, 255 ) );
  break;
 }
}
function updateSkinColor(){
 makeColor( skinColor, "calc_edit_r", "calc_edit_g", "calc_edit_b" );
 updateSkin();
 updateEditExpr();
 updateLogExpr();
}
function doChangeSkin( select ){
 skin = select.selectedIndex;
 updateSkin();
 updateSkinAns();
 updateEditExpr();
 updateLogExpr();
 writeProfileInt( "ENV_", "Skin", skin );
 cssSetStyleDisplayById( "calc_select_skin_color", skin == 6 );
 cssSetStyleDisplayById( "calc_select_skin_trans", skin == 7 );
 cssSetStyleDisplayById( "input_skin_color" , (skin == 6) && (skinColor == COLOR.length - 1) );
 cssSetStyleDisplayById( "input_skin_image" , skin == 7 );
}
function doChangeSkinColor( select ){
 skinColor = select.selectedIndex;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColor", skinColor );
 cssSetStyleDisplayById( "input_skin_color", (skin == 6) && (skinColor == COLOR.length - 1) );
}
function doChangeSkinAns( select ){
 skinAns = select.selectedIndex;
 updateSkinAns();
 writeProfileInt( "ENV_", "SkinAns", skinAns );
}
function doChangeSkinTrans( select ){
 skinTrans = select.selectedIndex;
 updateSkin();
 writeProfileInt( "ENV_", "SkinTrans", skinTrans );
}
function doCalcEditSkinImage(){
 skinImage = document.getElementById( "calc_edit_skin_image" ).value;
 if( (skinImage.indexOf( "://" ) < 0) && (skinImage.indexOf( "data:" ) != 0) ){
  skinImage = "http://" + skinImage;
  document.getElementById( "calc_edit_skin_image" ).value = skinImage;
 }
 updateSkin();
 writeProfileString( "ENV_", "SkinImage", skinImage );
 addListImage();
}
function onChangeEditR(){
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColorR", COLOR[COLOR.length - 1][0] );
}
function onChangeEditG(){
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColorG", COLOR[COLOR.length - 1][1] );
}
function onChangeEditB(){
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinColorB", COLOR[COLOR.length - 1][2] );
}
function doButtonEditRUp( e ){
 if( doButtonUpInt( "calc_edit_r", 1, 255 ) ){
  onChangeEditR();
 }
}
function doButtonEditRDown( e ){
 if( doButtonDownInt( "calc_edit_r", 1, 0 ) ){
  onChangeEditR();
 }
}
function doButtonEditGUp( e ){
 if( doButtonUpInt( "calc_edit_g", 1, 255 ) ){
  onChangeEditG();
 }
}
function doButtonEditGDown( e ){
 if( doButtonDownInt( "calc_edit_g", 1, 0 ) ){
  onChangeEditG();
 }
}
function doButtonEditBUp( e ){
 if( doButtonUpInt( "calc_edit_b", 1, 255 ) ){
  onChangeEditB();
 }
}
function doButtonEditBDown( e ){
 if( doButtonDownInt( "calc_edit_b", 1, 0 ) ){
  onChangeEditB();
 }
}
function doCheckColorR(){
 skinLockR = document.getElementById( "check_color_r" ).checked;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinLockR", skinLockR ? 1 : 0 );
}
function doCheckColorG(){
 skinLockG = document.getElementById( "check_color_g" ).checked;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinLockG", skinLockG ? 1 : 0 );
}
function doCheckColorB(){
 skinLockB = document.getElementById( "check_color_b" ).checked;
 updateSkinColor();
 writeProfileInt( "ENV_", "SkinLockB", skinLockB ? 1 : 0 );
}
function onChangeEditX(){
 updateSkin();
 writeProfileString( "ENV_", "SkinImageX", document.getElementById( "calc_edit_x" ).value );
 addListImage();
}
function onChangeEditY(){
 updateSkin();
 writeProfileString( "ENV_", "SkinImageY", document.getElementById( "calc_edit_y" ).value );
 addListImage();
}
function doButtonEditXUp( e ){
 if( doButtonUpInt( "calc_edit_x", 5, 100 ) ){
  onChangeEditX();
 }
}
function doButtonEditXDown( e ){
 if( doButtonDownInt( "calc_edit_x", 5, 0 ) ){
  onChangeEditX();
 }
}
function doButtonEditYUp( e ){
 if( doButtonUpInt( "calc_edit_y", 5, 100 ) ){
  onChangeEditY();
 }
}
function doButtonEditYDown( e ){
 if( doButtonDownInt( "calc_edit_y", 5, 0 ) ){
  onChangeEditY();
 }
}
function updateFont(){
 cssSetPropertyValue( "button" , "font-family", fontSpan );
 cssSetPropertyValue( "select" , "font-family", fontSpan );
 cssSetPropertyValue( ".span" , "font-family", fontSpan );
 cssSetPropertyValue( ".span_ellipsis" , "font-family", fontSpan );
 cssSetPropertyValue( ".div_usage" , "font-family", fontSpan );
 cssSetPropertyValue( ".input_file" , "font-family", fontSpan );
 cssSetPropertyValue( ".input" , "font-family", fontEdit );
 cssSetPropertyValue( ".select_var_font" , "font-family", fontEdit );
 cssSetPropertyValue( ".select_func_font", "font-family", fontEdit );
 cssSetPropertyValue( ".div_ans" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_edit" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_log" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_error" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_console" , "font-family", fontEdit );
 cssSetPropertyValue( ".div_selectimage" , "font-family", fontEdit );
 cssSetPropertyValue( ".textarea_profile", "font-family", fontEdit );
}
function updateEditExpr(){
 var forward = new _String();
 var after = new _String();
 editExpr.get( forward, after, true );
 if( editExpr.isSelAll() ){
  divEdit.innerHTML = "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + forward.escape().str() + after.escape().str() + "</span>";
 } else if( after.str().length == 0 ){
  divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>&nbsp;</span>";
 } else if( after.str().length == 1 ){
  divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + after.escape().str() + "</span>";
 } else {
  var tmp = after.str();
  var str1 = new _String( tmp.substring( 0, 1 ) );
  var str2 = new _String( tmp.slice( 1 ) );
  divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + str1.escape().str() + "</span>" + str2.escape().str();
 }
}
function insEditExpr( token ){
 if( token.length == 1 ){
  var chr = token.charCodeAt( 0 );
  if( (chr >= _CHAR_CODE_LA) && (chr <= _CHAR_CODE_LZ) ){
   if( (editExpr.lastChar() == '@') || editExpr.lastCharUpper() ){
    token = token.toUpperCase();
   }
  } else if( (chr >= _CHAR_CODE_UA) && (chr <= _CHAR_CODE_UZ) ){
   if( editExpr.lastCharLower() ){
    token = token.toLowerCase();
   }
  }
 }
 if( usageFlag ){
  printUsage( token, topProc, topParam, englishFlag, "calc_usage" );
 }
 editExpr.ins( token );
 writeProfileExpr();
 updateEditExpr();
}
function topEditExpr( e ){
 editExpr.top();
 updateEditExpr();
}
function endEditExpr( e ){
 editExpr.end();
 updateEditExpr();
}
function backwardEditExpr( e ){
 editExpr.backward();
 updateEditExpr();
}
function forwardEditExpr( e ){
 editExpr.forward();
 updateEditExpr();
}
function delEditExpr( e ){
 editExpr.del();
 writeProfileExpr();
 updateEditExpr();
}
function delAllEditExpr( e ){
 editExpr.delAll();
 writeProfileExpr();
 updateEditExpr();
 document.getElementById( "calc_usage" ).innerHTML = "";
}
function doButton0( e ){ if( e != undefined ) sound(); insEditExpr( "0" ); }
function doButton1( e ){ if( e != undefined ) sound(); insEditExpr( "1" ); }
function doButton2( e ){ if( e != undefined ) sound(); insEditExpr( "2" ); }
function doButton3( e ){ if( e != undefined ) sound(); insEditExpr( "3" ); }
function doButton4( e ){ if( e != undefined ) sound(); insEditExpr( "4" ); }
function doButton5( e ){ if( e != undefined ) sound(); insEditExpr( "5" ); }
function doButton6( e ){ if( e != undefined ) sound(); insEditExpr( "6" ); }
function doButton7( e ){ if( e != undefined ) sound(); insEditExpr( "7" ); }
function doButton8( e ){ if( e != undefined ) sound(); insEditExpr( "8" ); }
function doButton9( e ){ if( e != undefined ) sound(); insEditExpr( "9" ); }
function doButtonA( e ){ if( e != undefined ) sound(); insEditExpr( "A" ); }
function doButtonB( e ){ if( e != undefined ) sound(); insEditExpr( "B" ); }
function doButtonC( e ){ if( e != undefined ) sound(); insEditExpr( "C" ); }
function doButtonD( e ){ if( e != undefined ) sound(); insEditExpr( "D" ); }
function doButtonE( e ){ if( e != undefined ) sound(); insEditExpr( "E" ); }
function doButtonF( e ){ if( e != undefined ) sound(); insEditExpr( "F" ); }
function doButtonPoint( e ){ if( e != undefined ) sound(); insEditExpr( "." ); }
function doButtonPlus( e ){ if( e != undefined ) sound(); insEditExpr( "\\+" ); }
function doButtonMinus( e ){ if( e != undefined ) sound(); insEditExpr( "\\-" ); }
function doButtonSpace( e ){ if( e != undefined ) sound(); insEditExpr( " " ); }
function doButtonEPlus( e ){ if( e != undefined ) sound(); insEditExpr( "e+" ); }
function doButtonEMinus( e ){ if( e != undefined ) sound(); insEditExpr( "e-" ); }
function doButtonFract( e ){ if( e != undefined ) sound(); insEditExpr( "_" ); }
function doButtonI( e ){ if( e != undefined ) sound(); insEditExpr( "i" ); }
function doButtonTime( e ){ if( e != undefined ) sound(); insEditExpr( ":" ); }
function doButtonMul( e ){ if( e != undefined ) sound(); insEditExpr( "*" ); }
function doButtonDiv( e ){ if( e != undefined ) sound(); insEditExpr( "/" ); }
function doButtonMod( e ){ if( e != undefined ) sound(); insEditExpr( "%" ); }
function doButtonAdd( e ){ if( e != undefined ) sound(); insEditExpr( "+" ); }
function doButtonSub( e ){ if( e != undefined ) sound(); insEditExpr( "-" ); }
function doButtonShiftL( e ){ if( e != undefined ) sound(); insEditExpr( "<<" ); }
function doButtonShiftR( e ){ if( e != undefined ) sound(); insEditExpr( ">>" ); }
function doButtonComplement( e ){ if( e != undefined ) sound(); insEditExpr( "[~]" ); }
function doButtonUnaryMinus( e ){ if( e != undefined ) sound(); insEditExpr( "[-]" ); }
function doButtonAND( e ){ if( e != undefined ) sound(); insEditExpr( "&" ); }
function doButtonXOR( e ){ if( e != undefined ) sound(); insEditExpr( "^" ); }
function doButtonOR( e ){ if( e != undefined ) sound(); insEditExpr( "|" ); }
function doButtonDeg( e ){ if( e != undefined ) sound(); insEditExpr( "d" ); }
function doButtonGrad( e ){ if( e != undefined ) sound(); insEditExpr( "g" ); }
function doButtonRad( e ){ if( e != undefined ) sound(); insEditExpr( "r" ); }
function doButtonEsc( e ){ if( e != undefined ) sound(); insEditExpr( "\\" ); }
function doButtonBIN( e ){ if( e != undefined ) sound(); insEditExpr( "b" ); }
function doButtonHEX( e ){ if( e != undefined ) sound(); insEditExpr( "x" ); }
function doButtonHour( e ){ if( e != undefined ) sound(); insEditExpr( "h" ); }
function doButtonMin( e ){ if( e != undefined ) sound(); insEditExpr( "m" ); }
function doButtonSec( e ){ if( e != undefined ) sound(); insEditExpr( "s" ); }
function doButtonFrame( e ){ if( e != undefined ) sound(); insEditExpr( "f" ); }
function doButtonFactorial( e ){ if( e != undefined ) sound(); insEditExpr( "!" ); }
function doButtonPow( e ){ if( e != undefined ) sound(); insEditExpr( "^" ); }
function doButtonSin( e ){
 sound();
 insEditExpr( calcUI.buttonSin() );
 setButtonMode( 0 );
}
function doButtonCos( e ){
 sound();
 insEditExpr( calcUI.buttonCos() );
 setButtonMode( 0 );
}
function doButtonTan( e ){
 sound();
 insEditExpr( calcUI.buttonTan() );
 setButtonMode( 0 );
}
function doButtonLog( e ){
 sound();
 insEditExpr( calcUI.buttonLog() );
 setButtonMode( 0 );
}
function doButtonLog10( e ){
 sound();
 insEditExpr( calcUI.buttonLog10() );
 setButtonMode( 0 );
}
function doButtonSqr( e ){
 sound();
 insEditExpr( calcUI.buttonSqr() );
 setButtonMode( 0 );
}
function doButtonFunc( e ){
 sound();
 insEditExpr( e.target.innerHTML + " " );
 setButtonMode( 0 );
}
function doButtonExtFunc( e ){
 sound();
 insEditExpr( "!" + e.target.innerHTML + " " );
 setButtonMode( 0 );
}
function doButtonTop( e ){ if( e != undefined ) sound(); insEditExpr( "(" ); }
function doButtonEnd( e ){ if( e != undefined ) sound(); insEditExpr( ")" ); }
function doButtonSTO( e ){
 sound();
 calcUI.buttonSTO();
 updateSelectVar();
}
function doButtonRCL( e ){
 sound();
 insEditExpr( calcUI.buttonRCL() );
}
function doButtonMCL( e ){
 sound();
 calcUI.buttonMCL();
 updateSelectVar();
}
function doButtonEnter( e ){
 if( e != undefined ) sound();
 onCalcButtonEnter();
}
function updateLogExpr(){
 var html = new String();
 var tmpEdit = new EditExpr( -1 );
 var forward = new _String();
 var after = new _String();
 var tmp;
 var j = 0;
 html += "<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
 for( var i = logExpr.scroll(); i < logExpr.num(); i++ ){
  tmpEdit.importLog( logExpr.obj( i ) );
  tmpEdit.get( forward, after );
  if( i == logExpr.index() ){
   html += "<tr><td bgcolor='" + cursorBack + "'>";
  } else {
   html += "<tr><td>";
  }
  tmp = forward.str() + after.str();
  if( tmp.length > 29 ){
   if( i == logExpr.index() ){
    tmp = common.escape( tmp.substring( 0, 27 ) ) + "<span class='span_ellipsis' style='color:" + cursorText + "'>...</span>";
   } else {
    tmp = common.escape( tmp.substring( 0, 27 ) ) + "<span class='span_ellipsis'>...</span>";
   }
  } else {
   tmp = common.escape( tmp );
  }
  if( i == logExpr.index() ){
   html += "<span style='color:" + cursorText + "'>" + tmp + "</span>";
  } else {
   html += tmp;
  }
  html += "</td></tr>";
  j++;
  if( j >= logExpr.lineNum() ){
   break;
  }
 }
 html += "</table>";
 logExpr.element().innerHTML = html;
}
function addLogExpr(){
 var expr = new _String();
 editExpr.exportLog( expr );
 if( expr.str().length > 0 ){
  editExpr.selAll();
  updateEditExpr();
  for( var i = logExpr.num() - 1; i >= 0; i-- ){
   if( logExpr.obj( i ) == expr.str() ){
    logExpr.del( i );
   }
  }
  logExpr.ins( 0, expr.str() );
  updateLogExpr();
  writeProfileLogExpr();
 }
}
function importLogExpr(){
 var expr = logExpr.obj( logExpr.index() );
 if( expr != null ){
  editExpr.importLog( expr );
  writeProfileExpr();
  updateEditExpr();
  doButtonUIMain();
  setButtonMode( 0 );
 }
}
function upLogExpr( e ){
 logExpr.up();
 updateLogExpr();
}
function downLogExpr( e ){
 logExpr.down();
 updateLogExpr();
}
function delLogExpr( e ){
 logExpr.del( logExpr.index() );
 updateLogExpr();
 writeProfileLogExpr();
}
function delAllLogExpr(){
 logExpr.delAll();
 updateLogExpr();
 writeProfileLogExpr();
}
function updateSelectVar(){
 var _real = new _String();
 var _imag = new _String();
 var select = document.getElementById( "calc_select_var" );
 var index;
 var old = new String();
 for( var i = 0; i < 27; i++ ){
  old = select.options[i].innerHTML;
  index = (i == 0) ? 0 : (64 + i);
  if( topParam.isZero( index ) ){
   select.options[i].innerHTML = (index == 0) ? "Ans" : "@" + String.fromCharCode( index );
  } else {
   procToken().valueToString( topParam, topParam.val( index ), _real, _imag );
   select.options[i].innerHTML = ((index == 0) ? "Ans" : "@" + String.fromCharCode( index ) + "&nbsp;") + "&nbsp;=&nbsp;" + _real.str() + _imag.str();
  }
  if( started && (select.options[i].innerHTML != old) ){
   writeProfileVar( index );
  }
 }
}
function selListImage( url, x, y ){
 if( url.length > 0 ){
  var i;
  for( i = 0; i < listImage.num(); i++ ){
   if( listImage.obj( i )._url == url ){
    listImage.setIndex( i );
    break;
   }
  }
  if( i == listImage.num() ){
   listImage.add( new ListImageItem( url, x, y ) );
   writeProfileImage();
  }
 }
 updateListImage();
}
function addListImage(){
 var url = skinImage;
 if( url.length > 0 ){
  var i;
  for( i = 0; i < listImage.num(); i++ ){
   if( listImage.obj( i )._url == url ){
    listImage.obj( i )._x = document.getElementById( "calc_edit_x" ).value;
    listImage.obj( i )._y = document.getElementById( "calc_edit_y" ).value;
    listImage.setIndex( i );
    break;
   }
  }
  if( i == listImage.num() ){
   var position = "50";
   document.getElementById( "calc_edit_x" ).value = position;
   document.getElementById( "calc_edit_y" ).value = position;
   updateSkin();
   writeProfileString( "ENV_", "SkinImageX", position );
   writeProfileString( "ENV_", "SkinImageY", position );
   listImage.add( new ListImageItem( url, position, position ) );
  }
  updateListImage();
  writeProfileImage();
 }
}
function getListImage(){
 var item = listImage.obj( listImage.index() );
 if( item != null ){
  skinImage = item._url;
  document.getElementById( "calc_edit_skin_image" ).value = skinImage;
  document.getElementById( "calc_edit_x" ).value = item._x;
  document.getElementById( "calc_edit_y" ).value = item._y;
  updateSkin();
  writeProfileString( "ENV_", "SkinImage" , skinImage );
  writeProfileString( "ENV_", "SkinImageX", item._x );
  writeProfileString( "ENV_", "SkinImageY", item._y );
 }
}
function updateListImage(){
 var html = new String();
 var tmp;
 var j = 0;
 html += "<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
 for( var i = listImage.scroll(); i < listImage.num(); i++ ){
  if( i == listImage.index() ){
   html += "<tr><td bgcolor='" + cursorBack + "'>";
  } else {
   html += "<tr><td>";
  }
  tmp = listImage.obj( i )._url;
  if( tmp.length > 29 ){
   if( i == listImage.index() ){
    tmp = "<span class='span_ellipsis' style='color:" + cursorText + "'>...</span>" + tmp.slice( tmp.length - 27 );
   } else {
    tmp = "<span class='span_ellipsis'>...</span>" + tmp.slice( tmp.length - 27 );
   }
  }
  if( i == listImage.index() ){
   html += "<span style='color:" + cursorText + "'>" + tmp + "</span>";
  } else {
   html += tmp;
  }
  html += "</td></tr>";
  j++;
  if( j >= listImage.lineNum() ){
   break;
  }
 }
 html += "</table>";
 listImage.element().innerHTML = html;
}
function upListImage( e ){
 listImage.up();
 updateListImage();
 getListImage();
}
function downListImage( e ){
 listImage.down();
 updateListImage();
 getListImage();
}
function delListImage( e ){
 listImage.del( listImage.index() );
 updateListImage();
 writeProfileImage();
 getListImage();
}
function doCheckKeepTrig(){
 calcUI.setKeepTrigFlag( document.getElementById( "check_keep_trig" ).checked );
 writeProfileInt( "ENV_", "KeepTrig", calcUI.keepTrigFlag() ? 1 : 0 );
}
function doCheckItalic(){
 calcUI.setItalic( document.getElementById( "check_italic" ).checked );
 writeProfileInt( "ENV_", "Italic", calcUI.italic() ? 1 : 0 );
}
function doCheckRecalcMode(){
 calcUI.setReCalcModeFlag( document.getElementById( "check_recalc_mode" ).checked );
 writeProfileInt( "ENV_", "ReCalcMode", calcUI.reCalcModeFlag() ? 1 : 0 );
}
function doCheckRecalcAngle(){
 calcUI.setReCalcAngleFlag( document.getElementById( "check_recalc_angle" ).checked );
 writeProfileInt( "ENV_", "ReCalcAngle", calcUI.reCalcAngleFlag() ? 1 : 0 );
}
function doCheckRecalcSTO(){
 calcUI.setReCalcSTOFlag( document.getElementById( "check_recalc_sto" ).checked );
 writeProfileInt( "ENV_", "ReCalcSTO", calcUI.reCalcSTOFlag() ? 1 : 0 );
}
function doCheckPrintUsage(){
 usageFlag = document.getElementById( "check_print_usage" ).checked;
 updateButtonHeight();
 writeProfileInt( "ENV_", "PrintUsage", usageFlag ? 1 : 0 );
}
function canUseCookie(){
 return navigator.cookieEnabled;
}
var _cookie_expires = "Tue, 01 Jan 2030 00:00:00 GMT";
function setExpiresDate( date ){
 _cookie_expires = (new Date( currentTimeMillis() + date * 86400000 )).toGMTString();
}
function _getCookieArray(){
 return document.cookie.split( ";" );
}
function _getCookieParam( cookie ){
 var param = cookie.split( "=" );
 param[0] = param[0].replace( new RegExp( "^\\s+" ), "" );
 return param;
}
function cookieNum(){
 if( document.cookie.length == 0 ){
  return 0;
 }
 return _getCookieArray().length;
}
function getCookieKey( index ){
 if( document.cookie.length == 0 ){
  return "";
 }
 var cookie = _getCookieArray();
 if( index >= cookie.length ){
  return "";
 }
 var param = _getCookieParam( cookie[index] );
 return param[0];
}
function getCookie( key, defValue ){
 var cookie = _getCookieArray();
 for( var i = 0; i < cookie.length; i++ ){
  var param = _getCookieParam( cookie[i] );
  if( param[0] == key ){
   return unescape( param[1] );
  }
 }
 return defValue;
}
function setCookie( key, value ){
 if( value == null ){
  value = "";
 }
 var expires = _cookie_expires;
 if( value.length == 0 ){
  var date = new Date();
  date.setTime( 0 );
  expires = date.toGMTString();
 }
 document.cookie = key + "=" + escape( value ) + "; expires=" + expires;
}
function clearCookie( prefix ){
 var cookie = _getCookieArray();
 for( var i = cookie.length - 1; i >= 0; i-- ){
  var param = _getCookieParam( cookie[i] );
  if( (prefix == undefined) || (param[0].indexOf( prefix ) == 0) ){
   setCookie( param[0], "" );
  }
 }
}
var _cookie_val;
var _cookie_s;
var _cookie_str;
function beginCookieRead( key ){
 _cookie_val = getCookie( key, "" );
 _cookie_s = 0;
}
function cookieRead(){
 if( _cookie_s >= _cookie_val.length ){
  _cookie_str = "";
 } else {
  var e = _cookie_val.indexOf( "&", _cookie_s );
  if( e < 0 ){
   e = _cookie_val.length;
  }
  _cookie_str = _cookie_val.substring( _cookie_s, e );
  _cookie_s = e + 1;
 }
 return unescape( _cookie_str );
}
function endCookieRead(){
 _cookie_val = "";
 _cookie_str = "";
}
function beginCookieWrite(){
 _cookie_val = "";
}
function cookieWrite( str ){
 if( _cookie_val.length > 0 ){
  _cookie_val += "&";
 }
 _cookie_val += escape( str );
}
function endCookieWrite( key ){
 setCookie( key, _cookie_val );
 _cookie_val = "";
}
function canUseStorage(){
 try {
  return window.localStorage != null;
 } catch( e ){}
 return false;
}
function storageNum(){
 return window.localStorage.length;
}
function getStorageKey( index ){
 if( index >= storageNum() ){
  return "";
 }
 return window.localStorage.key( index );
}
function getStorage( key, defValue ){
 var value = window.localStorage.getItem( key );
 return (value == null) ? defValue : value;
}
function setStorage( key, value ){
 if( (value != null) && (value.length > 0) ){
  window.localStorage.setItem( key, value );
 } else {
  window.localStorage.removeItem( key );
 }
}
function clearStorage( prefix ){
 if( prefix == undefined ){
  window.localStorage.clear();
 } else {
  var num = storageNum();
  var key;
  for( var i = num - 1; i >= 0; i-- ){
   key = getStorageKey( i );
   if( (prefix == undefined) || (key.indexOf( prefix ) == 0) ){
    setStorage( key, null );
   }
  }
 }
}
var _storage_val;
var _storage_s;
var _storage_str;
function beginStorageRead( key ){
 _storage_val = getStorage( key, "" );
 _storage_s = 0;
}
function storageRead(){
 if( _storage_s >= _storage_val.length ){
  _storage_str = "";
 } else {
  var e = _storage_val.indexOf( "&", _storage_s );
  if( e < 0 ){
   e = _storage_val.length;
  }
  _storage_str = _storage_val.substring( _storage_s, e );
  _storage_s = e + 1;
 }
 return unescape( _storage_str );
}
function endStorageRead(){
 _storage_val = "";
 _storage_str = "";
}
function beginStorageWrite(){
 _storage_val = "";
}
function storageWrite( str ){
 if( _storage_val.length > 0 ){
  _storage_val += "&";
 }
 _storage_val += escape( str );
}
function endStorageWrite( key ){
 setStorage( key, _storage_val );
 _storage_val = "";
}
function _Preference( useStorage ){
 this.s = (useStorage && canUseStorage());
 this.c = canUseCookie();
}
_Preference.prototype = {
 num : function(){
  if( this.s ){
   return storageNum();
  } else if( this.c ){
   return cookieNum();
  }
  return 0;
 },
 getKey : function( index ){
  if( this.s ){
   return getStorageKey( index );
  } else if( this.c ){
   return getCookieKey( index );
  }
  return null;
 },
 get : function( key, defValue ){
  if( this.s ){
   return getStorage( key, defValue );
  } else if( this.c ){
   return getCookie( key, defValue );
  }
  return defValue;
 },
 set : function( key, value ){
  if( this.s ){
   setStorage( key, value );
  } else if( this.c ){
   setCookie( key, value );
  }
 },
 clear : function( prefix ){
  if( this.s ){
   clearStorage( prefix );
  } else if( this.c ){
   clearCookie( prefix );
  }
 },
 beginRead : function( key ){
  if( this.s ){
   beginStorageRead( key );
  } else if( this.c ){
   beginCookieRead( key );
  }
 },
 read : function(){
  if( this.s ){
   return storageRead();
  } else if( this.c ){
   return cookieRead();
  }
  return "";
 },
 endRead : function(){
  if( this.s ){
   endStorageRead();
  } else if( this.c ){
   endCookieRead();
  }
 },
 beginWrite : function(){
  if( this.s ){
   beginStorageWrite();
  } else if( this.c ){
   beginCookieWrite();
  }
 },
 write : function( str ){
  if( this.s ){
   storageWrite( str );
  } else if( this.c ){
   cookieWrite( str );
  }
 },
 endWrite : function( key ){
  if( this.s ){
   endStorageWrite( key );
  } else if( this.c ){
   endCookieWrite( key );
  }
 }
};
function _HttpRequestHeader( header, value ){
 this._header = header;
 this._value = value;
}
_HttpRequestHeader.prototype = {
 set : function( request ){
  _httpSetRequestHeader( request, this._header, this._value );
 }
};
var _http_header;
function httpInitHeader(){
 _http_header = new Array();
}
function httpAddHeader( header, value ){
 _http_header[_http_header.length] = new _HttpRequestHeader( header, value );
}
function httpHeader(){
 return _http_header;
}
function _httpOpen( method, url ){
 var request = null;
 if( !!XMLHttpRequest ){
  request = new XMLHttpRequest();
 } else if( !!ActiveXObject ){
  try {
   request = new ActiveXObject( "Msxml2.XMLHTTP.6.0" );
  } catch( e ){
   try {
    request = new ActiveXObject( "Msxml2.XMLHTTP.3.0" );
   } catch( e ){
    try {
     request = new ActiveXObject( "Msxml2.XMLHTTP" );
    } catch( e ){
     try {
      request = new ActiveXObject( "Microsoft.XMLHTTP" );
     } catch( e ){}
    }
   }
  }
 }
 if( request != null ){
  request.open( method, url, true );
  request.onreadystatechange = function(){
   if( request.readyState == 4 ){
    if( request.status == 200 ){
     onHttpResponse( request, request.responseText );
    } else {
     onHttpError( request, request.status );
    }
   }
  };
 }
 return request;
}
function _httpSetRequestHeader( request, header, value ){
 request.setRequestHeader( header, value );
 onHttpSetRequestHeader( header, value );
}
function httpGet( url, header ){
 var request = _httpOpen( "GET", url );
 if( request != null ){
  _httpSetRequestHeader( request, "If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT" );
  if( header != undefined ){
   for( var i = 0; i < header.length; i++ ){
    header[i].set( request );
   }
  }
  request.send( null );
 }
 return request;
}
function httpPost( url, data, type, header ){
 var request = _httpOpen( "POST", url );
 if( request != null ){
  _httpSetRequestHeader( request, "If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT" );
  _httpSetRequestHeader( request, "Content-Type", type );
  if( header != undefined ){
   for( var i = 0; i < header.length; i++ ){
    header[i].set( request );
   }
  }
  request.send( data );
 }
 return request;
}
var loadNum = 0;
var loading = false;
function doLoadExtFuncFile(){
 if( !loading ){
  loading = true;
  loadExtFuncFile();
 }
}
function loadExtFuncFile(){
 if( loadNum >= extFuncFile.length ){
  if( electron != null ){
   electron.applyExtFunc();
  }
  cssSetStyleDisplayById( "calc_button_loadextfunc" , false );
  cssSetStyleDisplayById( "calc_button_loadextfunc2", false );
  if( common.isPC() ){
   cssSetStyleDisplayById( "calc_input_loadextfunc" , true );
   cssSetStyleDisplayById( "calc_input_loadextfunc2", true );
   cssSetStyleDisplayById( "calc_input_loadextfunc3", true );
  }
  return;
 }
 var data;
 if( electron != null ){
  data = electron.getExtFunc( extFuncFile[loadNum], "" );
 } else {
  data = getProfileString( "TMP_", extFuncFile[loadNum], "" );
 }
 if( data.length > 0 ){
  onHttpResponse( null, data );
 } else {
  if( loading ){
   var file = extFuncFile[loadNum];
   httpGet( file );
  }
 }
}
window.onHttpSetRequestHeader = function( header, value ){
};
window.onHttpResponse = function( request, data ){
 extFuncData[loadNum] = splitData( data );
 data = "";
 for( var i = 0; i < extFuncData[loadNum].length; i++ ){
  if( i != 0 ) data += "\n";
  data += extFuncData[loadNum][i];
 }
 if( request != null ){
  if( electron != null ){
   electron.setExtFunc( extFuncFile[loadNum], data );
  } else {
   writeProfileString( "TMP_", extFuncFile[loadNum], data );
  }
 }
 loadNum++;
 loadExtFuncFile();
};
window.onHttpError = function( request, status ){
 loading = false;
};
function loadExtFuncFile2(){
 var i;
 if( electron != null ){
  electron.beginReadExtFunc( "load" );
  for( i = 0; ; i++ ){
   file = electron.readExtFunc();
   if( file.length == 0 ){
    break;
   }
   extFuncFile2[i] = file;
  }
  electron.endReadExtFunc();
 } else {
  beginGetProfile( "TMP_LOADCEF_" );
  for( i = 0; ; i++ ){
   file = getProfile();
   if( file.length == 0 ){
    break;
   }
   extFuncFile2[i] = file;
  }
  endGetProfile();
 }
 for( i = 0; i < extFuncFile2.length; i++ ){
  var data;
  if( electron != null ){
   data = electron.getExtFunc( extFuncFile2[i], "" );
  } else {
   data = getProfileString( "TMP_", extFuncFile2[i], "" );
  }
  if( data.length > 0 ){
   extFuncData2[i] = splitData( data );
  }
 }
}
function onInputFileLoad( func, data ){
 var i;
 func = func.toLowerCase();
 topProc.clearFuncCache( func );
 procGraph().checkExpr( func );
 var name = "/" + func + ".cef";
 var index = extFuncFile2.length;
 for( i = 0; i < extFuncFile2.length; i++ ){
  if( extFuncFile2[i].toLowerCase() == name ){
   name = extFuncFile2[i];
   index = i;
   break;
  }
 }
 extFuncFile2[index] = name;
 extFuncData2[index] = splitData( data );
 regExtFuncButton( extFuncName( extFuncFile2[index] ).toLowerCase() );
 data = "";
 for( i = 0; i < extFuncData2[index].length; i++ ){
  if( i != 0 ) data += "\n";
  data += extFuncData2[index][i];
 }
 if( electron != null ){
  electron.beginWriteExtFunc();
  for( i = 0; i < extFuncFile2.length; i++ ){
   electron.writeExtFunc( extFuncFile2[i] );
  }
  electron.endWriteExtFunc( "load" );
  electron.setExtFunc( extFuncFile2[index], data );
 } else {
  beginWriteProfile();
  for( i = 0; i < extFuncFile2.length; i++ ){
   writeProfile( extFuncFile2[i] );
  }
  endWriteProfile( "TMP_LOADCEF_" );
  writeProfileString( "TMP_", extFuncFile2[index], data );
 }
}
function onInputFileLoadEnd( num ){
 if( electron != null ){
  electron.applyExtFunc();
 }
}
function extFuncName( str ){
 var end = str.lastIndexOf( ".cef" );
 if( end >= 0 ){
  var top = str.lastIndexOf( "/" );
  if( top >= 0 ){
   top++;
  } else {
   top = 0;
  }
  return str.substring( top, end );
 }
 return "";
}
window.getExtFuncDataDirect = function( func ){
 if( (func.charAt( 0 ) == "!") && (func.length == 2) ){
  return splitData( getFunc( func.charAt( 1 ) ) );
 }
 return null;
};
window.getExtFuncDataNameSpace = function( func ){
 for( var i = 0; i < extFuncFile.length; i++ ){
  if( extFuncName( extFuncFile[i] ).toLowerCase() == func.toLowerCase() ){
   if( i < extFuncData.length ){
    return extFuncData[i];
   }
  }
 }
 for( var i = 0; i < extFuncFile2.length; i++ ){
  if( extFuncName( extFuncFile2[i] ).toLowerCase() == func.toLowerCase() ){
   if( i < extFuncData2.length ){
    return extFuncData2[i];
   }
  }
 }
 return null;
};
function regExtFuncButton( name ){
 var i;
 if( name.indexOf( ".inc" ) >= 0 ){
  return;
 }
 var elements = document.getElementsByName( "button_extfunc" );
 for( i = 0; i < elements.length; i++ ){
  if( elements[i].innerHTML == name ){
   return;
  }
 }
 for( i = 0; i < elements.length; i++ ){
  if( elements[i].disabled ){
   elements[i].innerHTML = name;
   elements[i].disabled = false;
   _addCalcEventListener( elements[i], "click", doButtonExtFunc );
   break;
  }
 }
}
function setExtFuncData( index, data ){
 if( loadNum >= extFuncFile.length ){
  return;
 }
 cssSetStyleDisplayById( "calc_button_loadextfunc" , false );
 cssSetStyleDisplayById( "calc_button_loadextfunc2", false );
 extFuncData[loadNum] = splitData( data );
 loadNum++;
 if( nativeRequest ){
  nativeRequest.send( "load_extfunc/" + extFuncFile[loadNum] );
 }
}
window.mainProc = function( parentProc, parentParam, func, funcParam, childProc, childParam ){
 var ret;
try {
 ret = childProc.mainLoop( func, childParam, funcParam, parentParam );
} catch( e ){ catchError( e ); }
 return ret;
};
window.assertProc = function( num, func ){
 con[1].newLine();
 if( (func != null) && (func.length > 0) ){
  if( englishFlag ) con[1].print( func + ": " );
  else con[1].print( func + ":" );
 }
 if( num > 0 ){
  if( englishFlag ) con[1].print( "Line " + num + ": " );
  else con[1].print( "" + num + "行:" );
 }
 if( englishFlag ) con[1].println( "Error " + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + ":" + consoleBreak() + "Failed to assert." );
 else con[1].println( "エラー(" + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + "):" + consoleBreak() + "アサートに失敗しました" );
 if( englishFlag ) document.getElementById( "calc_usage" ).innerHTML = "Failed to assert.";
 else document.getElementById( "calc_usage" ).innerHTML = "アサートに失敗しました";
 return retAssertProc;
};
function getErrorString( err, num, func, token ){
 var string = new String();
 var error = getProcErrorDefString( err, token, topParam._calculator, englishFlag );
 if( error.length > 0 ){
  if( (func != null) && (func.length > 0) ){
   if( englishFlag ) string += func + ": ";
   else string += func + ":";
  }
  if( num > 0 ){
   if( englishFlag ) string += "Line " + num + ": ";
   else string += "" + num + "行:";
  }
  if( englishFlag ) string += (((err & _CLIP_PROC_WARN) != 0) ? "Warning" : "Error") + " " + intToString( err, 16, 4 ) + ":" + consoleBreak() + error;
  else string += (((err & _CLIP_PROC_WARN) != 0) ? "警告" : "エラー") + "(" + intToString( err, 16, 4 ) + "):" + consoleBreak() + error;
 }
 return string;
}
window.errorProc = function( err, num, func, token ){
 if( silentErr ){
  procError.add( err, num, func, token );
 } else {
  var string = getErrorString( err, num, func, token );
  if( string.length > 0 ){
   con[1].newLine();
   con[1].println( string );
   if( string.indexOf( consoleBreak() ) >= 0 ){
    document.getElementById( "calc_usage" ).innerHTML = string.slice( string.indexOf( consoleBreak() ) + consoleBreak().length );
   } else {
    document.getElementById( "calc_usage" ).innerHTML = string;
   }
  }
 }
};
window.printAnsComplex = function( real, imag ){
 if( clipboardProc ){
  clipboardText = real + imag;
  electron.clipboardWrite( clipboardText );
  if( clipboardBeepFlag ){
   if( isAudioLoaded( clipboardAudio ) ){
    playAudio( clipboardAudio );
   }
  }
 }
 var _real = new _String( real );
 var _imag = new _String( imag );
 switch( calcUI.sepType() ){
 case 1:
  procToken().sepString( _real, "<span class='span_ans' style='font-family:\"Helvetica\"'>'</span>" );
  procToken().sepString( _imag, "<span class='span_ans' style='font-family:\"Helvetica\"'>'</span>" );
  break;
 case 2:
  procToken().sepString( _real, "<span class='span_ans' style='font-family:\"Helvetica\"'>,</span>" );
  procToken().sepString( _imag, "<span class='span_ans' style='font-family:\"Helvetica\"'>,</span>" );
  break;
 }
 real = _real.replace( "⏌", "<span class='span_ans' style='font-size:15px'>⏌</span>" ).str();
 imag = _imag.replace( "⏌", "<span class='span_ans' style='font-size:15px'>⏌</span>" ).str();
 if( real.length > 0 ){
  if( calcUI.italic() ){
   document.getElementById( "calc_ans" ).innerHTML = "<i><b><span class='span_ans'>" + real + "<br>" + imag + "</span></b></i>";
  } else {
   document.getElementById( "calc_ans" ).innerHTML = "<b><span class='span_ans'>" + real + "<br>" + imag + "</span></b>";
  }
 } else {
  if( calcUI.italic() ){
   document.getElementById( "calc_ans" ).innerHTML = "<i><b><span class='span_ans'>" + imag + "</span></b></i>";
  } else {
   document.getElementById( "calc_ans" ).innerHTML = "<b><span class='span_ans'>" + imag + "</span></b>";
  }
 }
 convUI.update();
};
window.printAnsMatrix = function( param, array ){
 var i;
 var code;
 var token;
 var string = new String();
 var indent = 0;
 var enter = false;
 con[0].newLine();
 con[0].setColor( "0000ff" );
 array.beginGetToken();
 while( array.getToken() ){
  code = getCode();
  token = getToken();
  if( enter ){
   if( code == _CLIP_CODE_ARRAY_TOP ){
    con[0].println( string );
    string = "";
    for( i = 0; i < indent; i++ ){
     string += "&nbsp;";
    }
   }
   enter = false;
  }
  string += procToken().tokenString( param, code, token );
  string += "&nbsp;";
  if( code == _CLIP_CODE_ARRAY_TOP ){
   indent += 2;
  }
  if( code == _CLIP_CODE_ARRAY_END ){
   indent -= 2;
   enter = true;
  }
 }
 con[0].println( string );
 con[0].setColor();
};
window.printWarn = function( warn, num, func ){
 con[1].newLine();
 if( (func != null) && (func.length > 0) ){
  if( englishFlag ) con[1].print( func + ": " );
  else con[1].print( func + ":" );
 }
 if( num > 0 ){
  if( englishFlag ) con[1].print( "Line " + num + ": " );
  else con[1].print( "" + num + "行:" );
 }
 if( englishFlag ) con[1].println( "Warning:" + consoleBreak() + warn );
 else con[1].println( "警告:" + consoleBreak() + warn );
 document.getElementById( "calc_usage" ).innerHTML = warn;
};
window.printError = function( error, num, func ){
 con[1].newLine();
 if( (func != null) && (func.length > 0) ){
  if( englishFlag ) con[1].print( func + ": " );
  else con[1].print( func + ":" );
 }
 if( num > 0 ){
  if( englishFlag ) con[1].print( "Line " + num + ": " );
  else con[1].print( "" + num + "行:" );
 }
 if( englishFlag ) con[1].println( "Error:" + consoleBreak() + error );
 else con[1].println( "エラー:" + consoleBreak() + error );
 document.getElementById( "calc_usage" ).innerHTML = error;
};
window.doFuncGColor = function( rgb ){
 return doFuncGColorBGR( rgb, COLOR_WIN );
};
window.doFuncGColor24 = function( index ){
 return _RGB2BGR( COLOR_WIN[index] );
};
window.doFuncEval = function( parentProc, childProc, childParam, string, value ){
 var ret;
try {
 ret = parentProc.doFuncEval( childProc, childParam, string, value );
} catch( e ){ catchError( e ); }
 return ret;
};
window.doCommandClear = function(){
 con[0].clear();
};
window.doCommandPrint = function( topPrint, flag ){
 var cur = topPrint;
 while( cur != null ){
  if( cur._string != null ){
   var tmp = new _String( cur._string );
   tmp.escape().replaceNewLine( consoleBreak() );
   con[0].print( tmp.str() );
  }
  cur = cur._next;
 }
 if( flag ){
  con[0].println();
 }
};
window.doCommandScan = function( topScan, proc, param ){
 var defString = new String();
 var newString = new String();
 var cur = topScan;
 while( cur != null ){
  defString = cur.getDefString( proc, param );
  newString = prompt( cur.title(), defString );
  if( (newString == null) || (newString.length == 0) ){
   newString = defString;
  }
  cur.setNewValue( newString, proc, param );
  cur = cur._next;
 }
};
window.gWorldClear = function( gWorld, color ){
 if( lockGUpdate ){
  needGUpdate = true;
  return;
 }
 canvasClear();
 canvasSetColor( gWorld._rgbFlag ? _RGB2BGR( color ) : COLOR_WIN[color] );
 canvasFill( 0, 0, gWorld._width, gWorld._height );
 canvasSetColor( gWorld._rgbFlag ? _RGB2BGR( _gWorld._color ) : COLOR_WIN[gWorld._color] );
};
window.gWorldSetColor = function( gWorld, color ){
 if( lockGUpdate ){
  return;
 }
 canvasSetColor( gWorld._rgbFlag ? _RGB2BGR( color ) : COLOR_WIN[color] );
};
window.gWorldPutColor = function( gWorld, x, y, color ){
 if( lockGUpdate ){
  needGUpdate = true;
  return;
 }
 if( topProc._gUpdateFlag ){
  canvasSetColor( gWorld._rgbFlag ? _RGB2BGR( color ) : COLOR_WIN[color] );
  canvasPut( x, y );
  canvasSetColor( gWorld._rgbFlag ? _RGB2BGR( gWorld._color ) : COLOR_WIN[gWorld._color] );
 }
};
window.gWorldPut = function( gWorld, x, y ){
 if( lockGUpdate ){
  needGUpdate = true;
  return;
 }
 if( topProc._gUpdateFlag ){
  canvasPut( x, y );
 }
};
window.gWorldFill = function( gWorld, x, y, w, h ){
 if( lockGUpdate ){
  needGUpdate = true;
  return;
 }
 if( topProc._gUpdateFlag ){
  canvasFill( x, y, w, h );
 }
};
window.gWorldLine = function( gWorld, x1, y1, x2, y2 ){
 if( lockGUpdate ){
  needGUpdate = true;
  return;
 }
 if( topProc._gUpdateFlag ){
  canvasLine( x1, y1, x2, y2 );
 }
};
window.doCommandGColor = function( index, rgb ){
 COLOR_WIN[index] = _RGB2BGR( rgb );
 needGUpdate = true;
};
function gUpdate( gWorld ){
 canvasClear();
 var image = gWorld._image;
 var offset = gWorld._offset;
 var width = gWorld._width;
 var height = gWorld._height;
 var x, y;
 for( y = 0; y < height; y++ ){
  for( x = 0; x < width; x++ ){
   canvasSetColor( gWorld._rgbFlag ? _RGB2BGR( image[y * offset + x] ) : COLOR_WIN[image[y * offset + x]] );
   canvasPut( x, y );
  }
 }
 canvasSetColor( gWorld._rgbFlag ? _RGB2BGR( gWorld._color ) : COLOR_WIN[gWorld._color] );
};
window.doCommandGUpdate = function( gWorld ){
 if( lockGUpdate ){
  needGUpdate = true;
  return;
 }
 gUpdate( gWorld );
};
window.doCommandPlot = function( parentProc, childProc, childParam, graph, start, end, step ){
try {
 parentProc.doCommandPlot( childProc, childParam, graph, start, end, step );
} catch( e ){ catchError( e ); }
};
window.doCommandRePlot = function( parentProc, childProc, childParam, graph, start, end, step ){
try {
 parentProc.doCommandRePlot( childProc, childParam, graph, start, end, step );
} catch( e ){ catchError( e ); }
};
window.doCommandUsage = function( topUsage ){
 common.setFont( 16, "Helvetica" );
 var usage = new String();
 var cur = topUsage;
 while( cur != null ){
  if( cur._string != null ){
   usage += common.escape( common.truncate( cur._string, 316, "" ) ) + "<br>";
  }
  cur = cur._next;
 }
 document.getElementById( "calc_usage" ).innerHTML = usage;
};
window.onStartPlot = function(){
 silentErr = true;
};
window.onEndPlot = function(){
 silentErr = false;
 var err = new _Integer();
 var num = new _Integer();
 var func = new _String();
 var token = new _String();
 for( var i = 0; i < procError.num(); i++ ){
  procError.get( i, err, num, func, token );
  errorProc( err._val, num._val, func.str(), token.str() );
 }
 procError.delAll();
};
window.onStartRePlot = function(){
 onStartPlot();
};
window.onEndRePlot = function(){
 onEndPlot();
};
function dummy(){}
window.onCalcPrintAns = function(){
 topProc.printAns( topParam );
};
window.onCalcButtonEnter = function(){
 var forward = new _String();
 var after = new _String();
 editExpr.get( forward, after, false );
 var line = forward.str() + after.str();
 if( line.length > 0 ){
  doCalcEditRadix();
  doCalcEditFps();
  document.getElementById( "calc_usage" ).innerHTML = "";
  con[0].lock();
  con[0].newLine();
  con[1].lock();
  con[1].newLine();
  if( lockGUpdate ){
   needGUpdate = false;
  }
try {
  initProcLoopCount();
  if( topProc.processLoop( line, topParam ) == _CLIP_PROC_END ){
   addLogExpr();
  }
} catch( e ){ catchError( e ); }
  if( lockGUpdate && needGUpdate ){
   gUpdate( procGWorld() );
   needGUpdate = false;
  }
  con[0].unlock();
  con[1].unlock();
  updateSelectVar();
 }
};
window.onCalcUpdateTrigButton = function( _this ){
 document.getElementById( "check_inv" ).checked = ((_this._checkTrig & 0x01) != 0) ? true : false;
 document.getElementById( "check_hyp" ).checked = ((_this._checkTrig & 0x02) != 0) ? true : false;
 document.getElementById( "button_sin" ).innerHTML = _this._buttonSin;
 document.getElementById( "button_cos" ).innerHTML = _this._buttonCos;
 document.getElementById( "button_tan" ).innerHTML = _this._buttonTan;
 document.getElementById( "button_log" ).innerHTML = _this._buttonLog;
 document.getElementById( "button_log10" ).innerHTML = _this._buttonLog10;
 document.getElementById( "button_sqr" ).innerHTML = _this._buttonSqr;
};
function updateCalcRadioMode(){
 var flag;
 cssLockStyleDisplay();
 switch( calcUI._mode ){
 case 0:
 case 1:
 case 2:
 case 3:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "calc_select_angle", flag );
 switch( calcUI._mode ){
 case 4:
 case 5:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "calc_select_bit" , flag );
 cssSetStyleDisplayById( "calc_form_radix" , flag );
 cssSetStyleDisplayById( "calc_static_radix", flag );
 cssSetStyleDisplayById( "button_radix_down", flag );
 cssSetStyleDisplayById( "button_radix_up" , flag );
 switch( calcUI._mode ){
 case 6:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "calc_select_time", flag );
 cssSetStyleDisplayById( "calc_form_fps" , flag );
 cssSetStyleDisplayById( "calc_static_fps" , flag );
 cssSetStyleDisplayById( "button_fps_down" , flag );
 cssSetStyleDisplayById( "button_fps_up" , flag );
 cssUnlockStyleDisplay();
}
function updateConvMode(){
 switch( calcUI._mode ){
 case 0:
 case 1:
 case 2:
 case 3:
  convUI.setMode( 1 );
  document.getElementById( "conv_edit_4" ).disabled = true;
  break;
 case 4:
 case 5:
  convUI.setMode( 0 );
  document.getElementById( "conv_edit_4" ).disabled = false;
  break;
 case 6:
  convUI.setMode( 2 );
  document.getElementById( "conv_edit_4" ).disabled = false;
  break;
 }
}
function doCalcFloat(){
 calcUI.setMode( 0 );
 updateCalcRadioMode();
 updateButton();
 updateSelectVar();
 updateConvMode();
 writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcFract(){
 calcUI.setMode( 1 );
 updateCalcRadioMode();
 updateButton();
 updateSelectVar();
 updateConvMode();
 writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcMFract(){
 calcUI.setMode( 2 );
 updateCalcRadioMode();
 updateButton();
 updateSelectVar();
 updateConvMode();
 writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcComplex(){
 calcUI.setMode( 3 );
 updateCalcRadioMode();
 updateButton();
 updateSelectVar();
 updateConvMode();
 writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcSigned(){
 calcUI.setMode( 4 );
 updateCalcRadioMode();
 updateButton();
 updateSelectVar();
 updateConvMode();
 writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcUnsigned(){
 calcUI.setMode( 5 );
 updateCalcRadioMode();
 updateButton();
 updateSelectVar();
 updateConvMode();
 writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcTime(){
 calcUI.setMode( 6 );
 updateCalcRadioMode();
 updateButton();
 updateSelectVar();
 updateConvMode();
 writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doChangeMode( select ){
 switch( select.selectedIndex ){
 case 0: doCalcFloat (); break;
 case 1: doCalcFract (); break;
 case 2: doCalcMFract (); break;
 case 3: doCalcComplex (); break;
 case 4: doCalcSigned (); break;
 case 5: doCalcUnsigned(); break;
 case 6: doCalcTime (); break;
 }
}
function updateCalcRadioBitType(){
 convUI.update();
}
function doCalcBit8(){
 calcUI.setBitType( 0 );
 updateCalcRadioBitType();
 writeProfileInt( "ENV_", "Bit", calcUI._bitType );
 updateSelectVar();
}
function doCalcBit16(){
 calcUI.setBitType( 1 );
 updateCalcRadioBitType();
 writeProfileInt( "ENV_", "Bit", calcUI._bitType );
 updateSelectVar();
}
function doCalcBit32(){
 calcUI.setBitType( 2 );
 updateCalcRadioBitType();
 writeProfileInt( "ENV_", "Bit", calcUI._bitType );
 updateSelectVar();
}
function doChangeBit( select ){
 switch( select.selectedIndex ){
 case 0: doCalcBit8 (); break;
 case 1: doCalcBit16(); break;
 case 2: doCalcBit32(); break;
 }
}
function updateCalcEditRadix(){
 document.getElementById( "calc_edit_radix" ).value = "" + calcUI._radix;
 convUI.update();
}
function doCalcEditRadix(){
 var radix = parseInt( document.getElementById( "calc_edit_radix" ).value );
 calcUI.setRadix( radix );
 updateCalcEditRadix();
 writeProfileInt( "ENV_", "Radix", calcUI._radix );
 updateSelectVar();
}
function doCalcDownRadix( e ){
 var radix = parseInt( document.getElementById( "calc_edit_radix" ).value );
 radix--;
 calcUI.setRadix( radix );
 updateCalcEditRadix();
 writeProfileInt( "ENV_", "Radix", calcUI._radix );
 updateSelectVar();
}
function doCalcUpRadix( e ){
 var radix = parseInt( document.getElementById( "calc_edit_radix" ).value );
 radix++;
 calcUI.setRadix( radix );
 updateCalcEditRadix();
 writeProfileInt( "ENV_", "Radix", calcUI._radix );
 updateSelectVar();
}
function updateCalcRadioTimeType(){
 convUI.update();
}
function doCalcTimeH(){
 calcUI.setTimeType( 0 );
 updateCalcRadioTimeType();
 writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doCalcTimeM(){
 calcUI.setTimeType( 1 );
 updateCalcRadioTimeType();
 writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doCalcTimeS(){
 calcUI.setTimeType( 2 );
 updateCalcRadioTimeType();
 writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doCalcTimeF(){
 calcUI.setTimeType( 3 );
 updateCalcRadioTimeType();
 writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doChangeTime( select ){
 switch( select.selectedIndex ){
 case 0: doCalcTimeH(); break;
 case 1: doCalcTimeM(); break;
 case 2: doCalcTimeS(); break;
 case 3: doCalcTimeF(); break;
 }
}
function updateCalcEditFps(){
 document.getElementById( "calc_edit_fps" ).value = "" + calcUI._fps + ((calcUI._fps == _INT( calcUI._fps )) ? ".0" : "");
 convUI.update();
}
function doCalcEditFps(){
 var fps = parseFloat( document.getElementById( "calc_edit_fps" ).value );
 calcUI.setFps( fps );
 updateCalcEditFps();
 writeProfileFloat( "ENV_", "FPS", calcUI._fps );
}
function doCalcDownFps( e ){
 var fps = parseFloat( document.getElementById( "calc_edit_fps" ).value );
 fps -= 1.0;
 calcUI.setFps( fps );
 updateCalcEditFps();
 writeProfileFloat( "ENV_", "FPS", calcUI._fps );
}
function doCalcUpFps( e ){
 var fps = parseFloat( document.getElementById( "calc_edit_fps" ).value );
 fps += 1.0;
 calcUI.setFps( fps );
 updateCalcEditFps();
 writeProfileFloat( "ENV_", "FPS", calcUI._fps );
}
function updateCalcRadioAngType(){
 var type = new _Integer();
 var updateFlag = new _Boolean();
 topProc.getAngType( type, updateFlag );
 document.getElementById( "calc_radio_deg" ).checked = (type._val == _ANG_TYPE_DEG );
 document.getElementById( "calc_radio_rad" ).checked = (type._val == _ANG_TYPE_RAD );
 document.getElementById( "calc_radio_grad" ).checked = (type._val == _ANG_TYPE_GRAD);
 convUI.update();
}
function doCalcDeg(){
 calcUI.setAngType( _ANG_TYPE_DEG );
 updateCalcRadioAngType();
 writeProfileAngle();
}
function doCalcRad(){
 calcUI.setAngType( _ANG_TYPE_RAD );
 updateCalcRadioAngType();
 writeProfileAngle();
}
function doCalcGrad(){
 calcUI.setAngType( _ANG_TYPE_GRAD );
 updateCalcRadioAngType();
 writeProfileAngle();
}
function updateCalcRadioSepType(){
 document.getElementById( "calc_radio_sep_off" ).checked = (calcUI._sepType == 0 );
 document.getElementById( "calc_radio_sep_upper" ).checked = (calcUI._sepType == 1);
 document.getElementById( "calc_radio_sep_lower" ).checked = (calcUI._sepType == 2);
}
function doCalcSepOff(){
 calcUI.setSepType( 0 );
 updateCalcRadioSepType();
 writeProfileInt( "ENV_", "SepType", calcUI.sepType() );
}
function doCalcSepUpper(){
 calcUI.setSepType( 1 );
 updateCalcRadioSepType();
 writeProfileInt( "ENV_", "SepType", calcUI.sepType() );
}
function doCalcSepLower(){
 calcUI.setSepType( 2 );
 updateCalcRadioSepType();
 writeProfileInt( "ENV_", "SepType", calcUI.sepType() );
}
window.onConvUpdateStatic = function( _this ){
 document.getElementById( "conv_static_1" ).innerHTML = _this._static1;
 document.getElementById( "conv_static_2" ).innerHTML = _this._static2;
 document.getElementById( "conv_static_3" ).innerHTML = _this._static3;
 document.getElementById( "conv_static_4" ).innerHTML = _this._static4;
};
window.onConvUpdateEdit = function( _this ){
 document.getElementById( "conv_edit_1" ).value = _this._edit1;
 document.getElementById( "conv_edit_2" ).value = _this._edit2;
 document.getElementById( "conv_edit_3" ).value = _this._edit3;
 document.getElementById( "conv_edit_4" ).value = _this._edit4;
};
function onChangeEdit1(){
 convUI._edit1 = document.getElementById( "conv_edit_1" ).value;
 var value = new _Value();
 convUI.getValue( 0x01, value );
 convUI.update( value, 0x02 | 0x04 | 0x08 );
}
function onChangeEdit2(){
 convUI._edit2 = document.getElementById( "conv_edit_2" ).value;
 var value = new _Value();
 convUI.getValue( 0x02, value );
 convUI.update( value, 0x01 | 0x04 | 0x08 );
}
function onChangeEdit3(){
 convUI._edit3 = document.getElementById( "conv_edit_3" ).value;
 var value = new _Value();
 convUI.getValue( 0x04, value );
 convUI.update( value, 0x01 | 0x02 | 0x08 );
}
function onChangeEdit4(){
 convUI._edit4 = document.getElementById( "conv_edit_4" ).value;
 var value = new _Value();
 convUI.getValue( 0x08, value );
 convUI.update( value, 0x01 | 0x02 | 0x04 );
}
function doCheckInv(){
 calcUI.checkInv();
}
function doCheckHyp(){
 calcUI.checkHyp();
}
function doChangeVar( select ){
 calcUI.setCurVar( select.options[select.selectedIndex].value );
}
function updateButton(){
 var flag;
 cssLockStyleDisplay();
 switch( calcUI._mode ){
 case 4:
 case 5:
  cssSetStyleDisplayById( "calc_button_integer", true );
  cssSetStyleDisplayById( "calc_button_lang" , false );
  break;
 default:
  cssSetStyleDisplayById( "calc_button_integer", false );
  cssSetStyleDisplayById( "calc_button_lang" , true );
  break;
 }
 switch( calcUI._mode ){
 case 4:
 case 5:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_complement", flag );
 cssSetStyleDisplayById( "button_shiftl" , flag );
 cssSetStyleDisplayById( "button_shiftr" , flag );
 cssSetStyleDisplayById( "button_and" , flag );
 cssSetStyleDisplayById( "button_xor" , flag );
 cssSetStyleDisplayById( "button_or" , flag );
 cssSetStyleDisplayById( "button_factorial2", flag );
 switch( calcUI._mode ){
 case 0:
 case 1:
 case 2:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_fract", flag );
 switch( calcUI._mode ){
 case 3:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_i", flag );
 switch( calcUI._mode ){
 case 6:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_time", flag );
 switch( calcUI._mode ){
 case 0:
 case 1:
 case 2:
 case 3:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_deg" , flag );
 cssSetStyleDisplayById( "button_grad" , flag );
 cssSetStyleDisplayById( "button_rad" , flag );
 cssSetStyleDisplayById( "button_factorial1", flag );
 cssSetStyleDisplayById( "button_pow1" , flag );
 switch( calcUI._mode ){
 case 6:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_hour" , flag );
 cssSetStyleDisplayById( "button_min" , flag );
 cssSetStyleDisplayById( "button_sec" , flag );
 cssSetStyleDisplayById( "button_frame", flag );
 cssSetStyleDisplayById( "button_pow2" , flag );
 switch( calcUI._mode ){
 case 0:
 case 1:
 case 2:
 case 3:
 case 6:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_eplus" , flag );
 cssSetStyleDisplayById( "button_eminus", flag );
 cssSetStyleDisplayById( "button_plus" , flag );
 cssSetStyleDisplayById( "button_point" , flag );
 switch( calcUI._mode ){
 case 4:
 case 5:
  flag = true;
  break;
 default:
  flag = false;
  break;
 }
 cssSetStyleDisplayById( "button_a", flag );
 cssSetStyleDisplayById( "button_b", flag );
 cssSetStyleDisplayById( "button_c", flag );
 cssSetStyleDisplayById( "button_d", flag );
 cssSetStyleDisplayById( "button_e", flag );
 cssSetStyleDisplayById( "button_f", flag );
 cssUnlockStyleDisplay();
}
function setMenu( newMenu ){
 switch( menu ){
 case 0:
  document.getElementById( "button_ui_main" ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
  document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
  break;
 case 1:
  document.getElementById( "button_ui_func" ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
  document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
  break;
 case 2:
  document.getElementById( "button_ui_log" ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
  document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
  break;
 case 3:
  document.getElementById( "button_ui_conv" ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
  document.getElementById( "button_ui_conv2" ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
  break;
 case 4:
  document.getElementById( "button_ui_console" ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
  document.getElementById( "button_ui_console2" ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
  break;
 case 5:
  document.getElementById( "button_ui_gworld" ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
  document.getElementById( "button_ui_gworld2" ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
  break;
 case 6:
  document.getElementById( "button_ui_option" ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
  document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
  break;
 }
 menu = newMenu;
 switch( menu ){
 case 0:
  document.getElementById( "button_ui_main" ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
  document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
  break;
 case 1:
  document.getElementById( "button_ui_func" ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
  document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
  break;
 case 2:
  document.getElementById( "button_ui_log" ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
  document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
  break;
 case 3:
  document.getElementById( "button_ui_conv" ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
  document.getElementById( "button_ui_conv2" ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
  break;
 case 4:
  document.getElementById( "button_ui_console" ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
  document.getElementById( "button_ui_console2" ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
  break;
 case 5:
  document.getElementById( "button_ui_gworld" ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
  document.getElementById( "button_ui_gworld2" ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
  break;
 case 6:
  document.getElementById( "button_ui_option" ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
  document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
  break;
 }
}
function doButtonUIMain(){
 if( menu == 0 ){
  return;
 }
 setMenu( 0 );
 document.getElementById( "button_ui_main" ).disabled = true;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = true;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "calc_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "calc_ui_top" , true );
 cssSetStyleDisplayById( "calc_ui_cursor" , true );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , usageFlag ? true : false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_button_" + (buttonMode + 1), true );
}
function setButtonMode( mode ){
 cssSetStyleDisplayById( "calc_ui_button_1", false );
 cssSetStyleDisplayById( "calc_ui_button_2", false );
 cssSetStyleDisplayById( "calc_ui_button_3", false );
 cssSetStyleDisplayById( "calc_ui_button_4", false );
 cssSetStyleDisplayById( "calc_ui_button_5", false );
 cssSetStyleDisplayById( "calc_ui_button_6", false );
 if( mode == undefined ){
  buttonMode++;
  if( buttonMode == 4 ){
   if( document.getElementById( "last_button_extfunc" ).disabled ){
    buttonMode = 0;
   }
  } else if( buttonMode == 5 ){
   if( document.getElementById( "last_button_extfunc2" ).disabled ){
    buttonMode = 0;
   }
  } else if( buttonMode >= 6 ){
   buttonMode = 0;
  }
 } else {
  buttonMode = mode;
 }
 cssSetStyleDisplayById( "calc_ui_button_" + (buttonMode + 1), true );
}
function updateLanguage(){
 document.title = englishFlag ? "ClipCalc" : "関数電卓";
 var select;
 select = document.getElementById( "calc_select_mode" );
 select.options[0].innerHTML = englishFlag ? "Floating point" : "浮動小数点";
 select.options[1].innerHTML = englishFlag ? "Fraction" : "分数";
 select.options[2].innerHTML = englishFlag ? "Mixed fraction" : "帯分数";
 select.options[3].innerHTML = englishFlag ? "Complex" : "複素数";
 select.options[4].innerHTML = englishFlag ? "Signed" : "符号付き";
 select.options[5].innerHTML = englishFlag ? "Unsigned" : "符号なし";
 select.options[6].innerHTML = englishFlag ? "Time" : "時間";
 document.getElementById( "calc_static_radix" ).innerHTML = englishFlag ? "base" : "進";
 select = document.getElementById( "calc_select_time" );
 select.options[0].innerHTML = englishFlag ? "Hour" : "時";
 select.options[1].innerHTML = englishFlag ? "Min" : "分";
 select.options[2].innerHTML = englishFlag ? "Sec" : "秒";
 select.options[3].innerHTML = englishFlag ? "Frame" : "ﾌﾚｰﾑ";
 document.getElementById( "calc_static_calculator" ).innerHTML = englishFlag ? "Calculator mode" : "電卓モード";
 document.getElementById( "button_loadextfunc" ).innerHTML = englishFlag ? "Load external function" : "外部関数読み込み";
 document.getElementById( "button_loadextfunc2" ).innerHTML = englishFlag ? "Load external function" : "外部関数読み込み";
 document.getElementById( "button_log_del" ).innerHTML = englishFlag ? "Del" : "消";
 document.getElementById( "button_log_delall" ).innerHTML = englishFlag ? "Clear" : "クリアする";
 document.getElementById( "button_console_clear" ).innerHTML = englishFlag ? "Clear" : "クリアする";
 document.getElementById( "button_console_clear2" ).innerHTML = englishFlag ? "Clear" : "クリアする";
 document.getElementById( "calc_static_option1" ).innerHTML = englishFlag ? "Answer:" : "計算結果:";
 select = document.getElementById( "calc_select_skin_ans" );
 select.options[0].innerHTML = englishFlag ? "Black" : "ブラック";
 select.options[1].innerHTML = englishFlag ? "Green" : "グリーン";
 select.options[2].innerHTML = englishFlag ? "Orange" : "オレンジ";
 select.options[3].innerHTML = englishFlag ? "Cyan" : "シアン";
 select.options[4].innerHTML = englishFlag ? "Magenta" : "マゼンタ";
 select.options[5].innerHTML = englishFlag ? "Yellow" : "イエロー";
 select.options[6].innerHTML = englishFlag ? "White" : "ホワイト";
 document.getElementById( "calc_static_option2" ).innerHTML = englishFlag ? "Body:" : "本体:";
 select = document.getElementById( "calc_select_skin" );
 select.options[0].innerHTML = englishFlag ? "Green" : "グリーン";
 select.options[1].innerHTML = englishFlag ? "Gray" : "グレー";
 select.options[2].innerHTML = englishFlag ? "Purple" : "パープル";
 select.options[3].innerHTML = englishFlag ? "Metal (gold)" : "メタル(金)";
 select.options[4].innerHTML = englishFlag ? "Metal (silver)" : "メタル(銀)";
 select.options[5].innerHTML = englishFlag ? "Metal (iron)" : "メタル(鉄)";
 select.options[6].innerHTML = englishFlag ? "Color" : "カラー";
 select.options[7].innerHTML = englishFlag ? "Image" : "画像";
 select = document.getElementById( "calc_select_skin_color" );
 select.options[0].innerHTML = englishFlag ? "Gray" : "グレー";
 select.options[1].innerHTML = englishFlag ? "Brown" : "ブラウン";
 select.options[2].innerHTML = englishFlag ? "Red" : "レッド";
 select.options[3].innerHTML = englishFlag ? "Pink" : "ピンク";
 select.options[4].innerHTML = englishFlag ? "Orange" : "オレンジ";
 select.options[5].innerHTML = englishFlag ? "Cream" : "クリーム";
 select.options[6].innerHTML = englishFlag ? "Green" : "グリーン";
 select.options[7].innerHTML = englishFlag ? "Sky blue" : "スカイブルー";
 select.options[8].innerHTML = englishFlag ? "Blue" : "ブルー";
 select.options[9].innerHTML = englishFlag ? "Purple" : "パープル";
 select.options[10].innerHTML = englishFlag ? "Custom" : "カスタム";
 select = document.getElementById( "calc_select_skin_trans" );
 select.options[0].innerHTML = englishFlag ? "100% through" : "100%透過";
 select.options[1].innerHTML = englishFlag ? "90% through" : "90%透過";
 select.options[2].innerHTML = englishFlag ? "80% through" : "80%透過";
 select.options[3].innerHTML = englishFlag ? "70% through" : "70%透過";
 select.options[4].innerHTML = englishFlag ? "60% through" : "60%透過";
 select.options[5].innerHTML = englishFlag ? "50% through" : "50%透過";
 document.getElementById( "calc_static_option3" ).innerHTML = englishFlag ? "Lock" : "固定";
 document.getElementById( "calc_static_option4" ).innerHTML = englishFlag ? "Lock" : "固定";
 document.getElementById( "calc_static_option5" ).innerHTML = englishFlag ? "Lock" : "固定";
 document.getElementById( "calc_static_option6" ).innerHTML = englishFlag ? "Pos X:" : "X方向:";
 document.getElementById( "calc_static_option7" ).innerHTML = englishFlag ? "Pos Y:" : "Y方向:";
 document.getElementById( "calc_static_option8" ).innerHTML = englishFlag ? "Display calculation results in italics" : "計算結果表示をイタリックに";
 document.getElementById( "calc_static_option9" ).innerHTML = englishFlag ? "Separator:" : "桁区切り:";
 document.getElementById( "calc_static_option10" ).innerHTML = englishFlag ? "None" : "なし";
 document.getElementById( "calc_static_option11" ).innerHTML = englishFlag ? "Upper" : "上部";
 document.getElementById( "calc_static_option12" ).innerHTML = englishFlag ? "Lower" : "下部";
 document.getElementById( "calc_static_option13" ).innerHTML = englishFlag ? "[Inv] [Hyp] holds the checked state" : "[Inv][Hyp]チェック状態を保持";
 document.getElementById( "calc_static_option14" ).innerHTML = englishFlag ? "Recalculation:" : "再計算:";
 document.getElementById( "calc_static_option15" ).innerHTML = englishFlag ? "When changing the type" : "型の変更時";
 document.getElementById( "calc_static_option16" ).innerHTML = englishFlag ? "When changing the angle type" : "角度の単位変更時";
 document.getElementById( "calc_static_option17" ).innerHTML = englishFlag ? "Before assignment to variable by [STO] button" : "[STO]ボタンによる変数の代入前";
 document.getElementById( "calc_static_option18" ).innerHTML = englishFlag ? "Usage is indicated when pressing button" : "ボタン押下時に使用法を表示";
 document.getElementById( "calc_static_option19" ).innerHTML = englishFlag ? "Button sound:" : "ボタン音:";
 document.getElementById( "calc_static_option20" ).innerHTML = englishFlag ? "Off" : "なし";
 document.getElementById( "calc_static_option21" ).innerHTML = englishFlag ? "On" : "あり";
 document.getElementById( "calc_static_option22" ).innerHTML = englishFlag ? "Vibrate" : "振動";
 document.getElementById( "calc_static_option23" ).innerHTML = englishFlag ? "Play sound when the calculation result is stored in the clipboard" : "計算結果をクリップボードに格納したら音を鳴らす";
 document.getElementById( "button_storage_clear" ).innerHTML = englishFlag ? "Clear<br>storage" : "ストレージ<br>クリア";
 document.getElementById( "button_cookie_clear" ).innerHTML = englishFlag ? "Clear<br>cookie" : "Cookie<br>クリア";
 document.getElementById( "button_profile_export" ).innerHTML = englishFlag ? "Export<br>profile" : "環境設定<br>ｴｸｽﾎﾟｰﾄ";
 document.getElementById( "button_profile_import" ).innerHTML = englishFlag ? "Import<br>profile" : "環境設定<br>ｲﾝﾎﾟｰﾄ";
 document.getElementById( "button_return" ).innerHTML = englishFlag ? "Return" : "戻る";
 document.getElementById( "button_getcontent" ).innerHTML = englishFlag ? "Album..." : "アルバム...";
 document.getElementById( "button_loadimage" ).innerHTML = englishFlag ? "Image file..." : "画像ファイル...";
 document.getElementById( "button_selectimage_del" ).innerHTML = englishFlag ? "Del" : "消";
 document.getElementById( "button_return2" ).innerHTML = englishFlag ? "Return" : "戻る";
 document.getElementById( "button_profile_import2" ).innerHTML = englishFlag ? "Import" : "ｲﾝﾎﾟｰﾄする";
 document.getElementById( "button_savefunc" ).innerHTML = englishFlag ? "Save" : "保存する";
 document.getElementById( "calc_static_tab" ).innerHTML = englishFlag ? "Tab width:" : "Tab幅:";
 document.getElementById( "calc_static_smart" ).innerHTML = englishFlag ? "Smart" : "スマート";
 if( englishFlag ){
  cssSetStyleDisplayById( "lang_japanese" , false );
  cssSetStyleDisplayById( "lang_japanese2", false );
  cssSetStyleDisplayById( "lang_japanese3", false );
  cssSetStyleDisplayById( "lang_english" , true );
  cssSetStyleDisplayById( "lang_english2" , true );
  cssSetStyleDisplayById( "lang_english3" , true );
 } else {
  cssSetStyleDisplayById( "lang_english" , false );
  cssSetStyleDisplayById( "lang_english2" , false );
  cssSetStyleDisplayById( "lang_english3" , false );
  cssSetStyleDisplayById( "lang_japanese" , true );
  cssSetStyleDisplayById( "lang_japanese2", true );
  cssSetStyleDisplayById( "lang_japanese3", true );
 }
 document.getElementById( "button_lang" ).innerHTML = englishFlag ? "to JP" : "to EN";
 if( convUI != null ){
  convUI.setEnglish( englishFlag );
 }
}
function setEnglish( isEnglish ){
 cssSetStyleDisplayById( "button_lang", false );
 englishFlag = isEnglish;
 updateLanguage();
}
function doButtonLang( e ){
 englishFlag = englishFlag ? false : true;
 writeProfileInt( "ENV_", "Language", englishFlag ? 1 : 0 );
 updateLanguage();
 document.getElementById( "calc_usage" ).innerHTML = "";
}
function doButtonSHIFT( e ){
 setButtonMode();
}
function doButtonUIFunc(){
 if( menu == 1 ){
  return;
 }
 setMenu( 1 );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = true;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = true;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "calc_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , true );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
}
function doButtonUILog(){
 if( menu == 2 ){
  return;
 }
 setMenu( 2 );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = true;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = true;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "calc_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , true );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
 con[1].scrollBottom();
}
function doButtonUIConv(){
 if( menu == 3 ){
  return;
 }
 setMenu( 3 );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = true;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = true;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "calc_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , true );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
}
function doButtonUIConsole(){
 if( menu == 4 ){
  return;
 }
 setMenu( 4 );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = true;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = true;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "calc_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , true );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
 con[0].scrollBottom();
}
function doButtonUIGWorld(){
 if( menu == 5 ){
  return;
 }
 setMenu( 5 );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = true;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = true;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "calc_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , true );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
}
function doButtonUIOption(){
 if( menu == 6 ){
  return;
 }
 setMenu( 6 );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = true;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = true;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , (isAndroidTablet() || isIPad()) ? false : true );
 cssSetStyleDisplayById( "calc_ui_menu2" , (isAndroidTablet() || isIPad()) ? true : false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , true );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
}
function doButtonUISelectImage(){
 setMenu( 7 );
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , false );
 cssSetStyleDisplayById( "calc_ui_menu2" , false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", true );
 cssSetStyleDisplayById( "calc_ui_profile" , false );
 cssUnlockStyleDisplay();
}
function doButtonUIProfile( readOnly ){
 setMenu( 8 );
 cssSetStyleDisplayById( "button_profile_import2", readOnly ? false : true );
 document.getElementById( "profile" ).readOnly = readOnly;
 if( !readOnly ){
  if( electron != null ){
   document.getElementById( "profile" ).value = electron.readProfile();
  } else {
   document.getElementById( "profile" ).value = "";
  }
 }
 document.getElementById( "button_ui_main" ).disabled = false;
 document.getElementById( "button_ui_func" ).disabled = false;
 document.getElementById( "button_ui_log" ).disabled = false;
 document.getElementById( "button_ui_conv" ).disabled = false;
 document.getElementById( "button_ui_console" ).disabled = false;
 document.getElementById( "button_ui_gworld" ).disabled = false;
 document.getElementById( "button_ui_option" ).disabled = false;
 document.getElementById( "button_ui_main2" ).disabled = false;
 document.getElementById( "button_ui_func2" ).disabled = false;
 document.getElementById( "button_ui_log2" ).disabled = false;
 document.getElementById( "button_ui_conv2" ).disabled = false;
 document.getElementById( "button_ui_console2" ).disabled = false;
 document.getElementById( "button_ui_gworld2" ).disabled = false;
 document.getElementById( "button_ui_option2" ).disabled = false;
 cssLockStyleDisplay();
 cssSetStyleDisplayById( "calc_ui_menu" , false );
 cssSetStyleDisplayById( "calc_ui_menu2" , false );
 cssSetStyleDisplayById( "calc_ui_top" , false );
 cssSetStyleDisplayById( "calc_ui_cursor" , false );
 cssSetStyleDisplayById( "calc_ui_button_1" , false );
 cssSetStyleDisplayById( "calc_ui_button_2" , false );
 cssSetStyleDisplayById( "calc_ui_button_3" , false );
 cssSetStyleDisplayById( "calc_ui_button_4" , false );
 cssSetStyleDisplayById( "calc_ui_button_5" , false );
 cssSetStyleDisplayById( "calc_ui_button_6" , false );
 cssSetStyleDisplayById( "calc_ui_usage" , false );
 cssSetStyleDisplayById( "calc_ui_func" , false );
 cssSetStyleDisplayById( "calc_ui_log" , false );
 cssSetStyleDisplayById( "calc_ui_conv" , false );
 cssSetStyleDisplayById( "calc_ui_console" , false );
 cssSetStyleDisplayById( "calc_ui_gworld" , false );
 cssSetStyleDisplayById( "calc_ui_option" , false );
 cssSetStyleDisplayById( "calc_ui_selectimage", false );
 cssSetStyleDisplayById( "calc_ui_profile" , true );
 cssUnlockStyleDisplay();
}
function clearConsole( type ){
 con[type].clear();
}
function changeExpr(){
 var i, j;
 var token;
 for( i = 0; i < editExpr.num(); i++ ){
  token = editExpr.token( i );
  if( topParam._calculator ){
   if( token == "log " ) editExpr.set( i, "ln " );
   if( token == "log10 " ) editExpr.set( i, "log " );
  } else {
   if( token == "log " ) editExpr.set( i, "log10 " );
   if( token == "ln " ) editExpr.set( i, "log " );
  }
 }
 writeProfileExpr();
 updateEditExpr();
 var tmpEdit = new EditExpr( -1 );
 for( i = 0; i < logExpr.num(); i++ ){
  tmpEdit.importLog( logExpr.obj( i ) );
  for( j = 0; j < tmpEdit.num(); j++ ){
   token = tmpEdit.token( j );
   if( topParam._calculator ){
    if( token == "log " ) tmpEdit.set( j, "ln " );
    if( token == "log10 " ) tmpEdit.set( j, "log " );
   } else {
    if( token == "log " ) tmpEdit.set( j, "log10 " );
    if( token == "ln " ) tmpEdit.set( j, "log " );
   }
  }
  var expr = new _String();
  tmpEdit.exportLog( expr );
  logExpr.set( i, expr.str() );
 }
 updateLogExpr();
 writeProfileLogExpr();
}
function doCheckCalculator(){
 topParam._calculator = document.getElementById( "check_calculator" ).checked;
 calcUI.updateTrigButton();
 changeExpr();
 writeProfileInt( "ENV_", "Calculator", topParam._calculator ? 1 : 0 );
}
window.onCalcInitEnv = function( _this ){
 _this._mode = getProfileInt( "ENV_", "Mode", 0 );
 _this._bitType = getProfileInt( "ENV_", "Bit", 2 );
 _this._radix = getProfileInt( "ENV_", "Radix", 10 );
 _this._timeType = getProfileInt( "ENV_", "Time", 2 );
 _this._fps = getProfileFloat( "ENV_", "FPS", 30.0 );
 _this._keepTrigFlag = (getProfileInt( "ENV_", "KeepTrig", 0 ) == 1);
 _this._reCalcModeFlag = (getProfileInt( "ENV_", "ReCalcMode", 1 ) == 1);
 _this._reCalcAngleFlag = (getProfileInt( "ENV_", "ReCalcAngle", 1 ) == 1);
 _this._reCalcSTOFlag = (getProfileInt( "ENV_", "ReCalcSTO", 1 ) == 1);
 _this._sepType = getProfileInt( "ENV_", "SepType", 0 );
 _this._italic = (getProfileInt( "ENV_", "Italic", 0 ) == 1);
 _this._proc.setAngType( getProfileInt( "ENV_", "Angle", _ANG_TYPE_RAD ), false );
 var calculatorMode = getProfileInt( "ENV_", "Calculator", -1 );
 if( calculatorMode < 0 ){
  calculatorMode = 1;
  resetCalculator = true;
 }
 _this._param._calculator = (calculatorMode == 1);
};
function getProfileVar(){
 var c = new _Complex();
 var f = new _Fract();
 var t = new _Time();
 var v = new _Value();
 for( var i = 64; i <= 90; i++ ){
  beginGetProfile( "VAR_" + ((i == 64) ? "ANS" : String.fromCharCode( i )) );
  var tmp = getProfile();
  if( tmp.length != 0 ){
   var type = parseInt( tmp );
   var c_re = parseFloat( getProfile() );
   var c_im = parseFloat( getProfile() );
   setComplex( c, c_re, c_im );
   var f_mi = (parseInt( getProfile() ) == 1);
   var f_nu = parseInt( getProfile() );
   var f_de = parseInt( getProfile() );
   setFract( f, f_mi, f_nu, f_de );
   var t_fps = parseFloat( getProfile() );
   var t_minus = (parseInt( getProfile() ) == 1);
   var t_hour = parseFloat( getProfile() );
   var t_min = parseFloat( getProfile() );
   var t_sec = parseFloat( getProfile() );
   var t_frame = parseFloat( getProfile() );
   setTime( t, t_fps, t_minus, t_hour, t_min, t_sec, t_frame );
   topParam.setVal( (i == 64) ? 0 : i, setValue( v, type, c, f, t ), true );
  }
  endGetProfile();
 }
}
function writeProfileVar( index ){
 var type = new _Integer();
 var c = new _Complex();
 var f = new _Fract();
 var t = new _Time();
 var c_re = new _Float();
 var c_im = new _Float();
 var f_mi = new _Boolean();
 var f_nu = new _Integer();
 var f_de = new _Integer();
 var t_fps = new _Float();
 var t_minus = new _Boolean();
 var t_hour = new _Float();
 var t_min = new _Float();
 var t_sec = new _Float();
 var t_frame = new _Float();
 getValue( topParam.val( index ), type, c, f, t );
 getComplex( c, c_re, c_im );
 getFract( f, f_mi, f_nu, f_de );
 getTime( t, t_fps, t_minus, t_hour, t_min, t_sec, t_frame );
 beginWriteProfile();
 writeProfile( "" + type._val );
 writeProfile( "" + c_re._val );
 writeProfile( "" + c_im._val );
 writeProfile( f_mi._val ? "1" : "0" );
 writeProfile( "" + f_nu._val );
 writeProfile( "" + f_de._val );
 writeProfile( "" + t_fps._val );
 writeProfile( t_minus._val ? "1" : "0" );
 writeProfile( "" + t_hour._val );
 writeProfile( "" + t_min._val );
 writeProfile( "" + t_sec._val );
 writeProfile( "" + t_frame._val );
 endWriteProfile( "VAR_" + ((index == 0) ? "ANS" : String.fromCharCode( index )) );
}
var _getProfileExpr = false;
function getProfileExpr(){
 _getProfileExpr = true;
 editExpr.importLog( getProfileString( "EXPR_", "", "" ) );
 if( getProfileInt( "EXPR_", "SelAll", 0 ) == 1 ){
  editExpr.selAll();
 }
 _getProfileExpr = false;
}
function writeProfileExpr(){
 var expr = new _String();
 editExpr.exportLog( expr );
 writeProfileString( "EXPR_", "", expr.str() );
}
window.onEditExprUpdateSelAll = function( id, flag ){
 if( (id == 1) && !_getProfileExpr ){
  writeProfileInt( "EXPR_", "SelAll", flag ? 1 : 0 );
 }
};
function getProfileLogExpr(){
 var expr = new String();
 beginGetProfile( "LOG_" + "Expr" );
 while( true ){
  expr = getProfile();
  if( expr.length == 0 ){
   break;
  }
  logExpr.add( expr );
 }
 endGetProfile();
 logExpr.setIndex( 0 );
}
function writeProfileLogExpr(){
 var expr = new String();
 beginWriteProfile();
 for( var i = 0; i < logExpr.num(); i++ ){
  expr = logExpr.obj( i );
  writeProfile( expr );
 }
 endWriteProfile( "LOG_" + "Expr" );
}
function writeProfileAngle(){
 var type = new _Integer();
 var updateFlag = new _Boolean();
 topProc.getAngType( type, updateFlag );
 writeProfileInt( "ENV_", "Angle", type._val );
}
function addListImageFromProfile( url, x, y ){
 var i;
 for( i = 0; i < listImage.num(); i++ ){
  if( listImage.obj( i )._url == url ){
   break;
  }
 }
 if( i == listImage.num() ){
  listImage.add( new ListImageItem( url, x, y ) );
 }
}
function getProfileImage(){
 var i;
 var url, x, y;
 var prefix = new Array();
 for( i = 0; ; i++ ){
  var tmp = getProfileString( "IMAGE_PATH_", "" + (i + 1), "" );
  if( tmp.length == 0 ){
   break;
  }
  prefix[i] = new String();
  prefix[i] = tmp;
  beginGetProfile( "IMAGE_" + (i + 1) );
  while( true ){
   url = getProfile();
   x = getProfile();
   y = getProfile();
   if( url.length == 0 ){
    break;
   }
   addListImageFromProfile( tmp + url, x, y );
  }
  endGetProfile();
 }
 beginGetProfile( "IMAGE_" );
 while( true ){
  url = getProfile();
  x = getProfile();
  y = getProfile();
  if( url.length == 0 ){
   break;
  }
  if( url.charAt( 0 ) == '{' ){
   var tmp = url.indexOf( "}" );
   if( tmp >= 2 ){
    i = parseInt( url.substring( 1, tmp ) ) - 1;
    if( i < prefix.length ){
     url = prefix[i] + url.slice( tmp + 1 );
    }
   }
  }
  addListImageFromProfile( url, x, y );
 }
 endGetProfile();
}
function writeProfileImage(){
 var i, j;
 var prefix = new Array();
 var image = new Array();
 clearProfile( "_CLIPCALC_" + "IMAGE_" );
 beginWriteProfile();
 for( i = 0; i < listImage.num(); i++ ){
  var url = listImage.obj( i )._url;
  var tmp = url.lastIndexOf( "/" );
  if( tmp >= 0 ){
   var url1 = url.substring( 0, tmp + 1 );
   var url2 = url.slice( tmp + 1 );
   for( j = 0; j < prefix.length; j++ ){
    if( prefix[j] == url1 ){
     break;
    }
   }
   if( j >= prefix.length ){
    prefix[j] = new String();
    prefix[j] = url1;
    image[j] = new String();
    image[j] = escape( url2 );
   } else {
    image[j] += "&" + escape( url2 );
   }
   image[j] += "&" + listImage.obj( i )._x;
   image[j] += "&" + listImage.obj( i )._y;
  } else {
   writeProfile( url );
   writeProfile( listImage.obj( i )._x );
   writeProfile( listImage.obj( i )._y );
  }
 }
 endWriteProfile( "IMAGE_" );
 for( i = 0; i < prefix.length; i++ ){
  writeProfileString( "IMAGE_PATH_", "" + (i + 1), prefix[i] );
  writeProfileString( "IMAGE_" , "" + (i + 1), image [i] );
 }
}
var needSaveFunc = false;
function onEditorUpdateText( len ){
 needSaveFunc = true;
 cssSetStyleDisplayById( "calc_button_savefunc", true );
}
function getFunc( chr ){
 return getProfileString( "FUNC_", "" + chr, "" );
}
function setFunc( chr, text ){
 writeProfileString( "FUNC_", "" + chr, text );
 topProc.clearFuncCache( "!" + chr );
 procGraph().checkExpr( "!" + chr );
}
function loadFunc(){
 editor.setText( getFunc( String.fromCharCode( curFunc ) ) );
}
function saveFunc(){
 if( needSaveFunc ){
  setFunc( String.fromCharCode( curFunc ), "" + editor.text() );
  updateSelectFunc1( document.getElementById( "calc_select_func" ), curFunc - 97 );
  needSaveFunc = false;
  cssSetStyleDisplayById( "calc_button_savefunc", false );
 }
}
function doChangeFunc( select ){
 saveFunc();
 selFunc = select.selectedIndex;
 curFunc = select.options[selFunc].value;
 loadFunc();
 writeProfileInt( "EDITOR_", "SelFunc", selFunc );
}
function callFunc(){
 saveFunc();
 insEditExpr( "!!" + String.fromCharCode( curFunc ) + " " );
 doButtonUIMain();
 setButtonMode( 0 );
}
function onChangeTabWidth(){
 var tabWidth = parseInt( document.getElementById( "tab_width" ).value );
 if( tabWidth < 0 ){
  tabWidth = 0;
  document.getElementById( "tab_width" ).value = "" + tabWidth;
 }
 cssSetPropertyValue( ".textarea_func", "tab-size", "" + tabWidth );
 writeProfileInt( "EDITOR_", "Tab", tabWidth );
}
function doButtonEditTabUp( e ){
 if( doButtonUpInt( "tab_width", 1, 8 ) ){
  onChangeTabWidth();
 }
}
function doButtonEditTabDown( e ){
 if( doButtonDownInt( "tab_width", 1, 1 ) ){
  onChangeTabWidth();
 }
}
function doCheckSmart(){
 setEditorSmartFlag( document.getElementById( "check_smart" ).checked );
 writeProfileInt( "EDITOR_", "Smart", editorSmartFlag() ? 1 : 0 );
}
function updateSelectFunc1( select, i ){
 var index = 97 + i;
 var data = getFunc( String.fromCharCode( index ) );
 if( data.length == 0 ){
  select.options[i].innerHTML = "" + String.fromCharCode( index );
 } else {
  select.options[i].innerHTML = "" + String.fromCharCode( index ) + "&nbsp;&nbsp;" + splitData( data )[0];
 }
}
function updateSelectFunc(){
 var select = document.getElementById( "calc_select_func" );
 for( var i = 0; i < 26; i++ ){
  updateSelectFunc1( select, i );
 }
}
function getContent(){
 if( nativeRequest ){
  nativeRequest.send( "get_content" );
 }
}
function onContentBase64( data ){
 var canvas = document.createElement( "canvas" );
 var context = canvas.getContext( "2d" );
 var image = new Image();
 image.onload = function(){
  var dstHeight = common.isPC() ? defHeight( false ) : bodyHeight;
  var dstWidth = this.width * dstHeight / this.height;
  if( dstWidth < 322 ){
   dstWidth = 322;
   dstHeight = this.height * 322 / this.width;
  }
  canvas.width = dstWidth;
  canvas.height = dstHeight;
  context.drawImage( this, 0, 0, this.width, this.height, 0, 0, dstWidth, dstHeight );
  var quality = 1.0;
  do {
   skinImage = canvas.toDataURL( "image/jpeg", quality );
   quality -= 0.1;
  } while( skinImage.length <= 102400 );
  document.getElementById( "calc_edit_skin_image" ).value = skinImage;
  updateSkin();
  writeProfileString( "ENV_", "SkinImage", skinImage );
  addListImage();
 };
 image.src = data;
}
function onInputFileLoadImage( name, image ){
 onContentBase64( image.src );
}
window.onKeyDown = function( key ){
 if( menu != 0 ){
  return false;
 }
 if(
  (document.activeElement == document.getElementById( "calc_edit_radix" )) ||
  (document.activeElement == document.getElementById( "calc_edit_fps" ))
 ){
  return false;
 }
 if( key == 16 ){
  keyShiftOnly = true;
 } else {
  keyShiftOnly = false;
 }
 switch( key ){
 case 38 : topEditExpr(); return true;
 case 40 : endEditExpr(); return true;
 case 37 : backwardEditExpr(); return true;
 case 39: forwardEditExpr(); return true;
 case 8: delEditExpr(); return true;
 case 46 : delEditExpr(); return true;
 case 48 : doButton0(); return true;
 case 96: doButton0(); return true;
 case 49:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton1();
  } else {
   switch( calcUI._mode ){
   case 0:
   case 1:
   case 2:
   case 3:
   case 4:
   case 5:
    doButtonFactorial();
    break;
   default:
    insEditExpr( "!" );
    break;
   }
  }
  return true;
 case 97: doButton1(); return true;
 case 50 : doButton2(); return true;
 case 98: doButton2(); return true;
 case 51 : doButton3(); return true;
 case 99: doButton3(); return true;
 case 52 : doButton4(); return true;
 case 100: doButton4(); return true;
 case 53:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton5();
  } else {
   doButtonMod();
  }
  return true;
 case 101: doButton5(); return true;
 case 54:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton6();
   return true;
  } else if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonAND();
   return true;
  }
  break;
 case 102: doButton6(); return true;
 case 55 : doButton7(); return true;
 case 103: doButton7(); return true;
 case 56:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton8();
  } else {
   doButtonTop();
  }
  return true;
 case 104: doButton8(); return true;
 case 57:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButton9();
  } else {
   doButtonEnd();
  }
  return true;
 case 105: doButton9(); return true;
 case 65:
  if( editExpr.lastChar() == '!' ){
   insEditExpr( "a" );
  } else if( editExpr.lastChar() == '@' ){
   insEditExpr( "A" );
  } else if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonA();
  } else {
   insEditExpr( "a" );
  }
  return true;
 case 66:
  if( editExpr.lastChar() == '!' ){
   insEditExpr( "b" );
  } else if( editExpr.lastChar() == '@' ){
   insEditExpr( "B" );
  } else if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   if( editExpr.lastChar() == '\\' ){
    doButtonBIN();
   } else {
    doButtonB();
   }
  } else {
   insEditExpr( "b" );
  }
  return true;
 case 67:
  if( editExpr.lastChar() == '!' ){
   insEditExpr( "c" );
  } else if( editExpr.lastChar() == '@' ){
   insEditExpr( "C" );
  } else if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonC();
  } else {
   insEditExpr( "c" );
  }
  return true;
 case 68:
  if( editExpr.lastChar() == '!' ){
   insEditExpr( "d" );
  } else if( editExpr.lastChar() == '@' ){
   insEditExpr( "D" );
  } else if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonD();
  } else {
   insEditExpr( "d" );
  }
  return true;
 case 69:
  if( editExpr.lastChar() == '!' ){
   insEditExpr( "e" );
  } else if( editExpr.lastChar() == '@' ){
   insEditExpr( "E" );
  } else if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonE();
  } else {
   if( editExpr.lastCharNumber() ){
    if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
     doButtonEPlus();
    } else {
     doButtonEMinus();
    }
   } else {
    insEditExpr( "e" );
   }
  }
  return true;
 case 70:
  if( editExpr.lastChar() == '!' ){
   insEditExpr( "f" );
  } else if( editExpr.lastChar() == '@' ){
   insEditExpr( "F" );
  } else if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonF();
  } else {
   insEditExpr( "f" );
  }
  return true;
 case 71: insEditExpr( "g" ); return true;
 case 72: insEditExpr( "h" ); return true;
 case 73: insEditExpr( "i" ); return true;
 case 74: insEditExpr( "j" ); return true;
 case 75: insEditExpr( "k" ); return true;
 case 76: insEditExpr( "l" ); return true;
 case 77: insEditExpr( "m" ); return true;
 case 78: insEditExpr( "n" ); return true;
 case 79: insEditExpr( "o" ); return true;
 case 80: insEditExpr( "p" ); return true;
 case 81: insEditExpr( "q" ); return true;
 case 82: insEditExpr( "r" ); return true;
 case 83: insEditExpr( "s" ); return true;
 case 84: insEditExpr( "t" ); return true;
 case 85: insEditExpr( "u" ); return true;
 case 86: insEditExpr( "v" ); return true;
 case 87: insEditExpr( "w" ); return true;
 case 88: insEditExpr( "x" ); return true;
 case 89: insEditExpr( "y" ); return true;
 case 90: insEditExpr( "z" ); return true;
 case 110:
  switch( calcUI._mode ){
  case 0:
  case 1:
  case 2:
  case 3:
   doButtonPoint();
   return true;
  }
  break;
 case 190:
  switch( calcUI._mode ){
  case 0:
  case 1:
  case 2:
  case 3:
   doButtonPoint();
   return true;
  case 4:
  case 5:
   doButtonShiftR();
   return true;
  }
  break;
 case 187:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonPlus();
  } else {
   doButtonAdd();
  }
  return true;
 case 189:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonSub();
  } else {
   doButtonMinus();
  }
  return true;
 case 226:
  if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonEsc();
  } else {
   doButtonFract();
  }
  return true;
 case 186:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   if( calcUI._mode == 6 ){
    doButtonTime();
    return true;
   }
  } else {
   doButtonMul();
   return true;
  }
  break;
 case 107:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonAdd();
  } else {
   doButtonPlus();
  }
  return true;
 case 109:
  if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
   doButtonSub();
  } else {
   doButtonMinus();
  }
  return true;
 case 106: doButtonMul(); return true;
 case 111: doButtonDiv(); return true;
 case 191: doButtonDiv(); return true;
 case 222:
  if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
    doButtonXOR();
   } else {
    doButtonComplement();
   }
  } else {
   doButtonPow();
  }
  return true;
 case 220:
  if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   if( _AND( _key_state, keyBit( 16 ) ) == 0 ){
    doButtonEsc();
   } else {
    doButtonOR();
   }
   return true;
  }
  break;
 case 188:
  if( (calcUI._mode == 4) || (calcUI._mode == 5) ){
   doButtonShiftL();
   return true;
  }
  break;
 case 192:
  insEditExpr( "@" );
  return true;
 case 32: doButtonSpace(); return true;
 case 13: doButtonEnter(); return true;
 }
 return false;
};
window.onKeyUp = function( key ){
 if( (key == 16) && keyShiftOnly ){
  doButtonSHIFT();
  return true;
 }
 return false;
};
