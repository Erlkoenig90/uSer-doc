var index =
[
    [ "Introduction", "index.html#Introduction", null ],
    [ "License", "index.html#License", null ],
    [ "Getting started", "index.html#GettingStarted", null ],
    [ "Testcases", "index.html#Testcases", null ],
    [ "Documentation", "index.html#Documentation", null ],
    [ "Tutorial", "tutorial.html", [
      [ "Data Structures", "tutorial.html#ConDataStr", null ],
      [ "Raw Data", "tutorial.html#ConRaw", null ],
      [ "Attributes", "tutorial.html#ConAttr", null ],
      [ "The serialize and deserialize functions", "tutorial.html#ConAPI", [
        [ "Error Handling", "tutorial.html#ConError", null ]
      ] ],
      [ "Defining and Annotating structs", "tutorial.html#ConStructAnnot", [
        [ "Defining and annotating struct members separately", "tutorial.html#ConStruct1", null ],
        [ "Annotating a whole struct", "tutorial.html#ConStruct2", null ],
        [ "Annotating a single struct member", "tutorial.html#ConStruct3", null ],
        [ "Defining and annotating a single member in one step", "tutorial.html#ConStruct4", null ],
        [ "Defining and annotating all struct members in one step", "tutorial.html#ConStruct5", null ],
        [ "Non-Intrusive struct annotation", "tutorial.html#ConStruct6", null ]
      ] ],
      [ "Byte Order", "tutorial.html#ConBO", null ],
      [ "Sign Formats", "tutorial.html#ConSF", null ],
      [ "Integer Sizes", "tutorial.html#ConWidth", null ],
      [ "Padding", "tutorial.html#ConPadding", null ],
      [ "Raw Iterators", "tutorial.html#ConIter", [
        [ "Input Iterators with no padding bytes", "tutorial.html#ConIter1", null ],
        [ "Output Iterators with no padding bytes", "tutorial.html#ConIter2", null ],
        [ "Input Iterators with padding bytes and without operator +=", "tutorial.html#ConIter3", null ],
        [ "Input Iterators with padding bytes and with operator +=", "tutorial.html#ConIter4", null ],
        [ "Output Iterator with padding bytes and T::iterator_category = std::output_iterator_tag", "tutorial.html#ConIter5", null ],
        [ "Output Iterator with padding bytes, without operator += and T::iterator_category = std::forward_iterator_tag", "tutorial.html#ConIter6", null ],
        [ "Output Iterator with padding bytes, with operator += and T::iterator_category = std::forward_iterator_tag", "tutorial.html#ConIter7", null ]
      ] ],
      [ "Dynamic data structures", "tutorial.html#ConDyn", [
        [ "Containers with dynamic size", "tutorial.html#ConDyn1", null ],
        [ "Dynamic size of struct members via Dyn::Size", "tutorial.html#ConDyn2", null ],
        [ "Optional struct members via Dyn::Optional", "tutorial.html#ConDyn3", null ]
      ] ],
      [ "Hooks", "tutorial.html#ConHooks", null ],
      [ "Calculating buffer sizes", "tutorial.html#ConBufSize", null ],
      [ "Using µSer on resource-constrained systems", "tutorial.html#Minimize", null ],
      [ "C-Compatibility", "tutorial.html#CCompat", null ]
    ] ],
    [ "Examples", "Examples.html", [
      [ "Serializing an integer into an array", "Examples.html#Ex01", null ],
      [ "Deserializing an integer from an array", "Examples.html#Ex02", null ],
      [ "Serializing an array of integers into an array", "Examples.html#Ex03", null ],
      [ "Serializing a tuple of integers into an array", "Examples.html#Ex04", null ],
      [ "Serializing a vector of integers into an array", "Examples.html#Ex05", null ],
      [ "Pre-Processing raw data with swapped bytes", "Examples.html#Ex06", null ],
      [ "Specifying attributes via function arguments", "Examples.html#Ex07", null ],
      [ "Serializing an integer into a std::vector", "Examples.html#Ex08", null ],
      [ "Serializing an integer into a std::vector with FixedSize", "Examples.html#Ex09", null ],
      [ "Deserializing an integer from a dynamically-sized std::vector with DynSize", "Examples.html#Ex10", null ],
      [ "Serializing an integer into a std::vector with InfSize", "Examples.html#Ex11", null ],
      [ "Using return codes to process errors", "Examples.html#Ex12", null ],
      [ "Defining a simple struct for serialization", "Examples.html#Ex13", null ],
      [ "Annotating a struct with attributes", "Examples.html#Ex14", null ],
      [ "Annotating a struct member with attributes", "Examples.html#Ex15", null ],
      [ "Defining and annotating a struct member in one step", "Examples.html#Ex16", null ],
      [ "Defining and annotating all struct members in one step", "Examples.html#Ex17", null ],
      [ "Annotating a struct without modifying its definition", "Examples.html#Ex18", null ],
      [ "Annotating a struct without modifying its definition in a compact fashion", "Examples.html#Ex19", null ],
      [ "Serializing an integer that is not a multiple of a byte in different byte orders", "Examples.html#Ex20", null ],
      [ "Serializing a signed integer with different sign formats", "Examples.html#Ex21", null ],
      [ "Setting integer width to convert RGB565 color values", "Examples.html#Ex22", null ],
      [ "Using padding bits to skip dummy data in the raw stream", "Examples.html#Ex23", null ],
      [ "Convert a file's byte order by using input/output iterators", "Examples.html#Ex24", null ],
      [ "Convert a file's byte order by using custom input/output iterators", "Examples.html#Ex25", null ],
      [ "Deserializing a vector of integers from an array.", "Examples.html#Ex26", null ],
      [ "Defining dynamic data structures with Dyn::Size", "Examples.html#Ex27", null ],
      [ "Defining optional data structures with Dyn::Optional", "Examples.html#Ex28", null ],
      [ "Defining hook funktions to be called before/after (de)serialization", "Examples.html#Ex29", null ],
      [ "Using µSer in C projects", "Examples.html#ExC", [
        [ "Common header file for data structures", "Examples.html#ExC_Hdr", null ],
        [ "Implementation of the C++ serialization functions", "Examples.html#ExC_Ser", null ],
        [ "Calling serialization functions from C code", "Examples.html#ExC_main", null ]
      ] ]
    ] ]
];