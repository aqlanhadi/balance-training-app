export const CategoryList =[
    { id:'1', category: 'Arm Raise' },
    { id:'2', category: 'Compliant Surface' },
    { id:'3', category: 'Gait' },
    { id:'4', category: 'Static Standing' },
    { id:'5', category: 'Weight Shifting' }
]

export const List =[
    {id: '1', category: 'Arm Raise', exercise: 'Firm Surface'},
    {id: '2', category: 'Arm Raise', exercise: 'Firm Eyes Closed'},
    {id: '3', category: 'Arm Raise', exercise: 'Toes Down'},
    {id: '4', category: 'Arm Raise', exercise: 'Toes Down Eyes Closed'},
    {id: '5', category: 'Arm Raise', exercise: 'Toes Up'},
    {id: '6', category: 'Arm Raise', exercise: 'Toes Up Eyes Closed'},

    {id: '7', category: 'Compliant Surface', exercise: 'Feet Apart'},
    {id: '8', category: 'Compliant Surface', exercise: 'Feet Heel to Toe'},
    {id: '9', category: 'Compliant Surface', exercise: 'Feet Together'},
    {id: '10', category: 'Compliant Surface', exercise: 'Partial Heel to Toe'},

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

    {id: '25', category: 'Static Standing', exercise: 'Feet Heel to Toe'},
    {id: '26', category: 'Static Standing', exercise: 'Feet Together'},
    {id: '27', category: 'Static Standing', exercise: 'Partial Heel to Toe'},
    {id: '28', category: 'Static Standing', exercise: 'Single Leg'},

    {id: '29', category: 'Weight Shifting', exercise: 'Front to Back'},
    {id: '30', category: 'Weight Shifting', exercise: 'Front to Back Eyes Closed'},
    {id: '31', category: 'Weight Shifting', exercise: 'Front to Back Foam'},
    {id: '32', category: 'Weight Shifting', exercise: 'Front to Back Eyes Closed'},
    {id: '33', category: 'Weight Shifting', exercise: 'Side to Side'},
    {id: '34', category: 'Weight Shifting', exercise: 'Side to Side Eyes Closed'},
    {id: '35', category: 'Weight Shifting', exercise: 'Side to Side Foam'},
    {id: '36', category: 'Weight Shifting', exercise: 'Side to Side Foam Eyes Closed'},
]

export const ArmRaiseList = List.filter(function(category, exercise){
    if (category.category === 'Arm Raise'){
        return exercise.exercise
    }
})

export const SurfaceList =[
    { id:'1', category: 'Feet Apart' },
    { id:'2', category: 'Feet Heel to Toe' },
    { id:'3', category: 'Feet Together' },
    { id:'4', category: 'Partial Heel to Toe' }
]

export const GaitList =[
    { id:'1', category: 'Backward Walking' },
    { id:'2', category: 'Fast Speed' },
    { id:'3', category: 'Figure 8' },
    { id:'4', category: 'Forward on Heels' },
    { id:'5', category: 'Forward on Toes' },
    { id:'6', category: 'High March' },
    { id:'7', category: 'Normal Speed' },
    { id:'8', category: 'Side Head Turns' },
    { id:'9', category: 'Side Stepping' },
    { id:'10', category: 'Slow Speed' },
    { id:'11', category: 'Step Over Shoebox' },
    { id:'12', category: 'Tandem Backward' },
    { id:'13', category: 'Tandem Forward' },
    { id:'14', category: 'Vertical Head Turns' }
]

export const StandingList =[
    { id:'1', category: 'Feet Heel to Toe' },
    { id:'2', category: 'Feet Together' },
    { id:'3', category: 'Partial Heel to Toe' },
    { id:'4', category: 'Single Leg' }
]

export const WeightShiftingList =[
    { id:'1', category: 'Front to Back' },
    { id:'2', category: 'Front to Back Eyes Closed' },
    { id:'3', category: 'Front to Back Foam' },
    { id:'4', category: 'Front to Back Eyes Closed' },
    { id:'5', category: 'Side to Side' },
    { id:'6', category: 'Side to Side Eyes Closed' },
    { id:'7', category: 'Side to Side Foam' },
    { id:'8', category: 'Side to Side Foam Eyes Closed' }
]

export const RatingList =[
    { id:'1', category: 'I feel completely steady' },
    { id:'2', category: 'I feel a little unsteady or off-balance' },
    { id:'3', category: 'I feel somewhat unsteady or like I may lose my balance' },
    { id:'4', category: 'I feel very unsteady or like I will lose my balance' },
    { id:'5', category: 'I lost my balance' },
]