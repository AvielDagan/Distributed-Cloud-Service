const mongoose = require('mongoose');

const teamScheme = new mongoose.Schema({
    teamName:{
        type:[String],
        required: [true,'You MUST fill that!']
    },
    emailAdress:{
        type: String,
        required: [true,'You MUST fill that!']
    },
    typePlay:{
        type:String,
        enum:["Male", "Female", "Couples"], 
        required: [true,'You MUST fill that!']
    }
});

const tournamentScheme = new mongoose.Schema({
    players:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'team',
        validate: {
            validator: function(i){
                return i.length < 13;
            },
            message: 'This tournament is allready FULL!'
        }
    },
    typeTournament:{
        type:String,
        enum:["Male", "Female", "Couples"], 
        required: [true,'You MUST fill that!']
    },
    tournamentDate:{
        type: Date
    }
});

const team = mongoose.model('team',teamScheme);
const tournament = mongoose.model('tournament',tournamentScheme);

module.exports ={
    tournament,
    team
} 
