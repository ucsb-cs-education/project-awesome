/*
   Given a radix (8,16,2,10), randomly choose either to describe that as, for example,
   "base 8" or as "octal".     This is so that you can check whether students can 
   identify the base by either of the two ways of referring to it.

   @param radix radix to be described
   @param randomStream an object of type random
   @return either "base n" or "word" where word described the base, e.g. "octal" or "base 8"
*/

var defaultConversions = [ 
    {fromRad: 10, toRad: 2, minVal: 0, maxVal: 255},
    {fromRad: 2, toRad: 10, minVal: 0, maxVal: 255},
    {fromRad: 2, toRad: 8, minVal: 0, maxVal: 511 },
    {fromRad: 8, toRad: 2, minVal: 0, maxVal: 63 },
    {fromRad: 2, toRad: 16, minVal: 0, maxVal: 65535},
    {fromRad: 16, toRad: 2, minVal: 0, maxVal: 65535} 
];

module.exports.radixDescription = function(radix, randomStream) {

    // choose "base 16" or "hexademical" ?
    var useWordOrNumberToDescribeBase = randomStream.nextIntRange(2);

    if (useWordOrNumberToDescribeBase == 0)
        return "base " + radix;

    switch(radix) {
        case 8: return "octal";
        case 16: return "hexadecimal";
        case 2: return "binary";
        case 10: return "decimal";
        default: return "base " + radix;
    }

}

module.exports.binHexOctDecQuestion = function(randomStream, params) {

    var conversions = params ? params.conversions : defaultConversions;
    
    var whichConversion = randomStream.nextIntRange(conversions.length)

    
    var numToConvert = conversions[whichConversion].minVal + randomStream.nextIntRange(conversions[whichConversion].maxVal-conversions[whichConversion].minVal + 1)
    
    
    var fromRad = conversions[whichConversion].fromRad;
    var toRad = conversions[whichConversion].toRad;      
    
    var from = numToConvert.toString(fromRad)
    
    var fromDesc = module.exports.radixDescription(fromRad, randomStream)
    var toDesc = module.exports.radixDescription(toRad, randomStream);
    
    var answer = numToConvert.toString(toRad)
    
    this.question = "Convert " + from + " from " + fromDesc + " to " + toDesc + "."; 
    this.answer = answer;
    this.format = "input";
};



