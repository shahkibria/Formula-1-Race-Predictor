let seldriv = d3.select("#selectDriver")
let selcirc = d3.select("#selectCircuit")

let segmentData = "https://rama-course-bucket.s3.us-east-2.amazonaws.com/segmenting_output.json";
var segments

// from data.js
const tableData = [
    {
      Circuit: "Australian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "mercedes",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "mercedes",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "mercedes",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "mercedes",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "mercedes",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Valtteri Bottas"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "mercedes",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "mercedes",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "mercedes",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "mercedes",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "mercedes",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "mercedes",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Lewis Hamilton"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "red_bull",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "red_bull",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "red_bull",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "red_bull",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "red_bull",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "red_bull",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "red_bull",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "red_bull",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Max Verstappen"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "ferrari",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "ferrari",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "ferrari",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "ferrari",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "ferrari",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "ferrari",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "ferrari",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "ferrari",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "ferrari",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "ferrari",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "ferrari",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Sebastian Vettel"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "ferrari",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "ferrari",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "ferrari",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "ferrari",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "ferrari",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 1,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "ferrari",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "ferrari",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "ferrari",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "ferrari",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "ferrari",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "ferrari",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Charles Leclerc"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "haas",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "haas",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "haas",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "haas",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "haas",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "haas",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "haas",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "haas",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "haas",
      Official_Position: 19,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "haas",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "haas",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "haas",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "haas",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "haas",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "haas",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "haas",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "haas",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "haas",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "haas",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Kevin Magnussen"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "renault",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "renault",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "renault",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "renault",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "renault",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "renault",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "renault",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "renault",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "renault",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "renault",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "renault",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "renault",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "renault",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "renault",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "renault",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "renault",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "renault",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Nico Hülkenberg"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "alfa",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "alfa",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "alfa",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "alfa",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "alfa",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "alfa",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "alfa",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "alfa",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "alfa",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "alfa",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "alfa",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "alfa",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "alfa",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "alfa",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "alfa",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "alfa",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "alfa",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "alfa",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "alfa",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "alfa",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "alfa",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Kimi Räikkönen"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "racing_point",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "racing_point",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "racing_point",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "racing_point",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "racing_point",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "racing_point",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "racing_point",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "racing_point",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "racing_point",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "racing_point",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "racing_point",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "racing_point",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 19,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "racing_point",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Lance Stroll"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Daniil Kvyat"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "red_bull",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "red_bull",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 1,
      RNF_Bin: 1,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "red_bull",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "red_bull",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "red_bull",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "red_bull",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "red_bull",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 2,
      Official_Bin: 1,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Pierre Gasly"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "mclaren",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "mclaren",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "mclaren",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "mclaren",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "mclaren",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "mclaren",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "mclaren",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "mclaren",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "mclaren",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "mclaren",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Lando Norris"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "racing_point",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "racing_point",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "racing_point",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "racing_point",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "racing_point",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "racing_point",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "racing_point",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "racing_point",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "racing_point",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "racing_point",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "racing_point",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "racing_point",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "racing_point",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 19,
      SVM_Bin: 4,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "racing_point",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Sergio Pérez"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "toro_rosso",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "red_bull",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 3,
      RNF_Bin: 1,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "red_bull",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "red_bull",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "red_bull",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "red_bull",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "red_bull",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Alexander Albon"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "alfa",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "alfa",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "alfa",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "alfa",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "alfa",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "alfa",
      Official_Position: 19,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "alfa",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "alfa",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "alfa",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "alfa",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "alfa",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "alfa",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "alfa",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "alfa",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "alfa",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "alfa",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "alfa",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "alfa",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "alfa",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "alfa",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "alfa",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Antonio Giovinazzi"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "williams",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "williams",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "williams",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "williams",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "williams",
      Official_Position: 19,
      Official_Bin: 4,
      SVM_Outcome: 2,
      SVM_Bin: 1,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "williams",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "williams",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "williams",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "williams",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "williams",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "williams",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "williams",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "williams",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "williams",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "williams",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "George Russell"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "williams",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 1,
      SVM_Bin: 1,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "williams",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "williams",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "williams",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "williams",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "williams",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "williams",
      Official_Position: 20,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "williams",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "williams",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "williams",
      Official_Position: 19,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "williams",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "williams",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "williams",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 2,
      RNF_Bin: 1,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "williams",
      Official_Position: 18,
      Official_Bin: 4,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "williams",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "williams",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 18,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "williams",
      Official_Position: 19,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Robert Kubica"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "haas",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "haas",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "haas",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "haas",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "haas",
      Official_Position: 20,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "haas",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "haas",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "haas",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "haas",
      Official_Position: 16,
      Official_Bin: 4,
      SVM_Outcome: 17,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "haas",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "haas",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "haas",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 18,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "haas",
      Official_Position: 17,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "haas",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 16,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "haas",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "haas",
      Official_Position: 15,
      Official_Bin: 4,
      SVM_Outcome: 20,
      SVM_Bin: 4,
      RNF_Outcome: 15,
      RNF_Bin: 4,
      Driver_Name: "Romain Grosjean"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "renault",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 4,
      RNF_Bin: 2,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 16,
      SVM_Bin: 4,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "renault",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "renault",
      Official_Position: 9,
      Official_Bin: 3,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "renault",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 3,
      SVM_Bin: 1,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "renault",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "renault",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "renault",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "renault",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "renault",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 7,
      SVM_Bin: 3,
      RNF_Outcome: 17,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "renault",
      Official_Position: 4,
      Official_Bin: 2,
      SVM_Outcome: 4,
      SVM_Bin: 2,
      RNF_Outcome: 5,
      RNF_Bin: 2,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "renault",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "renault",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "renault",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 8,
      RNF_Bin: 3,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "renault",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "renault",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 11,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "renault",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Daniel Ricciardo"
    },
    {
      Circuit: "Australian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Bahrain Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 19,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Chinese Grand Prix",
      Constructor: "mclaren",
      Official_Position: 14,
      Official_Bin: 4,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 14,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Azerbaijan Grand Prix",
      Constructor: "mclaren",
      Official_Position: 7,
      Official_Bin: 3,
      SVM_Outcome: 15,
      SVM_Bin: 4,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Spanish Grand Prix",
      Constructor: "mclaren",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Monaco Grand Prix",
      Constructor: "mclaren",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 10,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Canadian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 11,
      Official_Bin: 4,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 11,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "French Grand Prix",
      Constructor: "mclaren",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Austrian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 13,
      SVM_Bin: 4,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "British Grand Prix",
      Constructor: "mclaren",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "German Grand Prix",
      Constructor: "mclaren",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 5,
      SVM_Bin: 2,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Hungarian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Belgian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 12,
      SVM_Bin: 4,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Italian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 0,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 20,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Singapore Grand Prix",
      Constructor: "mclaren",
      Official_Position: 12,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 12,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Russian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 6,
      Official_Bin: 2,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 6,
      RNF_Bin: 2,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Japanese Grand Prix",
      Constructor: "mclaren",
      Official_Position: 5,
      Official_Bin: 2,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Mexican Grand Prix",
      Constructor: "mclaren",
      Official_Position: 13,
      Official_Bin: 4,
      SVM_Outcome: 6,
      SVM_Bin: 2,
      RNF_Outcome: 13,
      RNF_Bin: 4,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "United States Grand Prix",
      Constructor: "mclaren",
      Official_Position: 8,
      Official_Bin: 3,
      SVM_Outcome: 8,
      SVM_Bin: 3,
      RNF_Outcome: 9,
      RNF_Bin: 3,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Brazilian Grand Prix",
      Constructor: "mclaren",
      Official_Position: 3,
      Official_Bin: 1,
      SVM_Outcome: 14,
      SVM_Bin: 4,
      RNF_Outcome: 7,
      RNF_Bin: 3,
      Driver_Name: "Carlos Sainz"
    },
    {
      Circuit: "Abu Dhabi Grand Prix",
      Constructor: "mclaren",
      Official_Position: 10,
      Official_Bin: 3,
      SVM_Outcome: 9,
      SVM_Bin: 3,
      RNF_Outcome: 10,
      RNF_Bin: 3,
      Driver_Name: "Carlos Sainz"
    }
  ]

  // get table references
  var tbody = d3.select("tbody");
  
  function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      });
    });
  }
  
  // 1. Create a variable to keep track of all the filters as an object.
  var filters = {};
  
  // 3. Use this function to update the filters. 
  function updateFilters() {
  
      // 4a. Save the element that was changed as a variable.
      let changedElement = d3.select(this);
  
      // 4b. Save the value that was changed as a variable.
      let elementValue = changedElement.property("value");
      console.log(elementValue)
  
      // 4c. Save the id of the filter that was changed as a variable.
      let filterId = changedElement.attr("id");
      console.log(filterId)
  
      // 5. If a filter value was entered then add that filterId and value
      // to the filters list. Otherwise, clear that filter from the filters object.
      if (elementValue) {
        filters[filterId] = elementValue;
      }
  
      else {
        delete filters[filterId]
      }
   
    
      // 6. Call function to apply all filters and rebuild the table
      filterTable();
    
    }
    
    // 7. Use this function to filter the table when data is entered.
    function filterTable() {
    
      // 8. Set the filtered data to the tableData.
      let filteredData = tableData
      
    
      // 9. Loop through all of the filters and keep any data that
      // matches the filter values
      console.log(filters)
      Object.entries(filters).forEach(([key, value]) => {
        console.log(key, value)
        filteredData = filteredData.filter(row => row[key] === value);
      });
      console.log(filteredData)
    
      // 10. Finally, rebuild the table using the filtered data
      buildTable(filteredData);
      
    }
    
    // 2. Attach an event to listen for changes to each filter
    d3.selectAll("input").on("change", updateFilters);
    
    // Build the table when the page loads
    // buildTable(tableData);

fetchCircuits()
fetchDrivers()

fetchSegments()

function fetchSegments()
{
  d3.json(segmentData).then(function(data) {
    segments=data
    // console.log(segments)
  })
}
function gauge()
{
  let race = segments.filter(x=>x.location==selcirc.node().value)
  let speed = d3.select("#speed")
  let weather = d3.select("#weather")
  
  console.log(race)
  document.getElementById("speed").innerHTML = ""
  document.getElementById("weather").innerHTML = ""
  // speed
  //       .append("h4")
  //       .text("Speed: "+race[0]['cluster1_q']);
  weather
        .append("h4")
        .text("Weather: "+race[0]['cluster2_q']);
  if (race[0]['cluster2_q']=='Usally rainy and cloudy')
  {
  weather
  .append("img")
  .property("src","static/images/rainy.png")
  .property("style","margin-left:15%")

  }
  else if(race[0]['cluster2_q']=='Cloudy but rarely rainy')
  {
  weather
  .append("img")
  .property("src","static/images/cloud.png")
  .property("style","margin-left:15%")
  }
  else
  {
    weather
  .append("img")
  .property("src","static/images/sunny.png")
  .property("style","margin-left:15%")
  }  
  
  var gaugeData = [{value:race[0]['dnf%']*100,
  type:'indicator',
  mode:'gauge+number',
  title: { text: "<b>% of Drivers that Did Not Finish", font: { size: 18 } },
  gauge: { axis: { range: [null, 30] },
  bar: { color: "black" },
  steps: [
    { range: [0, 10], color: "Green" },
    { range: [10, 20], color: "Orange" },
    { range: [20, 30], color: "Red" },
  ]}

}];

var gaugeLayout = { 
width: 500, height: 250, margin: { t: 0, b: 0 },paper_bgcolor: "rgba(182,212,194,0)",
font: {
  family: 'Formula1 Display',
  color: 'white'}
};

// 6. Use Plotly to plot the gauge data and layout.
Plotly.newPlot('gauge', gaugeData, gaugeLayout);

let value
let color
if (race[0]['cluster1_q']=='fast')
{
  value = 3;
  color = 'green'
}
else if(race[0]['cluster1_q']=='medium')
{
  value = 2;
  color = 'lightgreen'
}
else
{
  value = 1;
  color = 'orange'
}
var indicate = [{value:value,
type:'indicator',
mode:'gauge',
title: { text: "<b>Speed of circuit: "+race[0]['cluster1_q'], font: { size: 18 } },
gauge: { shape:'bullet',axis: { range: [null, 3] },
bar: { color: color }
}

}]
var layout2 = { 
  width: 650, height: 50, margin: { t: 0, b: 0, l:280 },paper_bgcolor: "rgba(182,212,194,0)",
  font: {
    family: 'Formula1 Display',
    color: 'white'}
  };

Plotly.newPlot('speed', indicate, layout2);

}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function fetchCircuits()
{
selcirc.append("option")
.text("")
.property("value","")
  
  d3.selectAll("#circdrops").remove()
  var circuits = tableData.map(x=>x.Circuit)
  var unique = circuits.filter(onlyUnique)
  unique.forEach((sample) => {
    selcirc.append("option")
      .text(sample)
      .attr('id',"circdrops")
      .property("value", sample)
      .property("style","color: black");
    });
}

function fetchDrivers()
{
  seldriv.append("option")
.text("")
.property("value","")
  d3.selectAll("#drivdrops").remove()
  var drivers = tableData.map(x=>x.Driver_Name)
  var unique = drivers.filter(onlyUnique)
  unique.forEach((sample) => {
    seldriv.append("option")
      .text(sample)
      .attr('id',"drivdrops")
      .property("value", sample)
      .property("style","color: black");
    });
}
function selectCircuit(value)
{
  seldriv.node().value = ""
  var circuit = tableData.filter(x=>x.Circuit==value)
  buildTable(circuit)
  updatemap()
  gauge()
}
function selectDriver(value)
{
  var driver = tableData.filter(x=>x.Driver_Name==value)
  console.log(selcirc.node().value)
  if(selcirc.node().value == "")
  {
    console.log("entered if")
    buildTable(driver)
  }
  else
  {
  var circuit = driver.filter(x=>x.Circuit == selcirc.node().value)
  buildTable(circuit) 
  }
}