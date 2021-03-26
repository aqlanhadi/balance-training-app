export const CategoryList =[
    { id:'1', category: 'Arm Raise', img:require('../categoryImages/category-1.png')},
    { id:'2', category: 'Compliant Surface', img:require('../categoryImages/category-2.png')},
    { id:'3', category: 'Gait' , img:require('../categoryImages/category-3.png')},
    { id:'4', category: 'Static Standing' , img:require('../categoryImages/category-4.png')},
    { id:'5', category: 'Weight Shifting' , img:require('../categoryImages/category-5.png')},
]

export const IMUList =[
    { id: '1', model: 'blub 1', battery: '10%', switchStatus: false},
    { id: '2', model: 'blub 1', battery: '20%', switchStatus: true},
    { id: '3', model: 'blub 1', battery: '10%', switchStatus: false},
    { id: '4', model: 'blub 1', battery: '20%', switchStatus: false},
    { id: '5', model: 'blub 1', battery: '10%', switchStatus: false},
]
export const List =[
    // Arm Raise Exercises 
    {id: '1', category: 'Arm Raise', exercise: 'Firm Surface'},
    {id: '2', category: 'Arm Raise', exercise: 'Firm Eyes Closed'},
    {id: '3', category: 'Arm Raise', exercise: 'Toes Down'},
    {id: '4', category: 'Arm Raise', exercise: 'Toes Down Eyes Closed'},
    {id: '5', category: 'Arm Raise', exercise: 'Toes Up'},
    {id: '6', category: 'Arm Raise', exercise: 'Toes Up Eyes Closed'},

    // Compliant Surface Exercises
    {id: '7', category: 'Compliant Surface', exercise: 'Feet Apart'},
    {id: '8', category: 'Compliant Surface', exercise: 'Feet Heel to Toe'},
    {id: '9', category: 'Compliant Surface', exercise: 'Feet Together'},
    {id: '10', category: 'Compliant Surface', exercise: 'Partial Heel to Toe'},

    // Gait Exercises
    {id: '11', category: 'Gait', exercise: 'Backward Walking'},
    {id: '12', category: 'Gait', exercise: 'Fast Speed'},
    {id: '13', category: 'Gait', exercise: 'Figure 8'},
    {id: '14', category: 'Gait', exercise: 'Forward on Heels'},
    {id: '15', category: 'Gait', exercise: 'Forward on Toes'},
    {id: '16', category: 'Gait', exercise: 'High March'},
    {id: '17', category: 'Gait', exercise: 'Normal Speed'},
    {id: '18', category: 'Gait', exercise: 'Side Head Turns'},
    {id: '19', category: 'Gait', exercise: 'Side Stepping'},
    {id: '20', category: 'Gait', exercise: 'Slow Speed'},
    {id: '21', category: 'Gait', exercise: 'Step Over Shoebox'},
    {id: '22', category: 'Gait', exercise: 'Tandem Backward'},
    {id: '23', category: 'Gait', exercise: 'Tandem Forward'},
    {id: '24', category: 'Gait', exercise: 'Vertical Head Turns'},

    // Static Standing Exercises
    {id: '25', category: 'Static Standing', exercise: 'Feet Heel to Toe'},
    {id: '26', category: 'Static Standing', exercise: 'Feet Together'},
    {id: '27', category: 'Static Standing', exercise: 'Partial Heel to Toe'},
    {id: '28', category: 'Static Standing', exercise: 'Single Leg'},

    // Weight Shifting Exercises
    {id: '29', category: 'Weight Shifting', exercise: 'Front to Back'},
    {id: '30', category: 'Weight Shifting', exercise: 'Front to Back Eyes Closed'},
    {id: '31', category: 'Weight Shifting', exercise: 'Front to Back Foam'},
    {id: '32', category: 'Weight Shifting', exercise: 'Front to Back Eyes Closed'},
    {id: '33', category: 'Weight Shifting', exercise: 'Side to Side'},
    {id: '34', category: 'Weight Shifting', exercise: 'Side to Side Eyes Closed'},
    {id: '35', category: 'Weight Shifting', exercise: 'Side to Side Foam'},
    {id: '36', category: 'Weight Shifting', exercise: 'Side to Side Foam Eyes Closed'},
]

export const RatingList =[
    { id:'1', category: '1. I feel completely steady', backgroundColor: '#56C596' },
    { id:'2', category: '2. I feel a little unsteady or off-balance', backgroundColor: '#CFF4D2' },
    { id:'3', category: '3. I feel somewhat unsteady or like I may lose my balance', backgroundColor: '#FFDCA2' },
    { id:'4', category: '4. I feel very unsteady or like I will lose my balance', backgroundColor: '#FFBD71' },
    { id:'5', category: '5. I lost my balance', backgroundColor: '#FE6768' },
]