var express = require('express');
const routers = express.Router();
const mongoose = require('mongoose');
const { tournament, team}= require ('./scheme');

routers.post('/addTeam',async(req,res)=>{
    const newTeam = new team({
        teamName: req.body.teamName,
        emailAdress: req.body.emailAdress,
        typePlay: req.body.typePlay
    });
    newTeam.save(
        err =>{
            if(err)
            throw err;
            console.log(`Registed Successfully`);
            res.json(newTeam);
        })
});

routers.post('/addTournament',async(req,res)=>{
    const newTournament = new tournament({
        typeTournament: req.body.typeTournament,
        tournamentDate: req.body.tournamentDate
    });
    newTournament.save(
        err =>{
            if(err)
            throw err;
            console.log(`Tournament created Successfully`);
            res.json(newTournament);
        })
});

routers.put('/updateTeam',async(req,res)=>{
        team.updateOne({emailAdress:req.body.emailAdress},{
        teamName: req.body.teamName,
        emailAdress: req.body.emailAdress,
        typePlay: req.body.typePlay
    },(err,result) =>{
        if(err)
        throw err;
        console.log(`Updated Team Successfully`);
        res.json('Updated Team Successfully');
    });
});

routers.put('/updateTournament',async(req,res)=>{
    tournament.updateOne({tournamentDate:req.body.tournamentDate},{
        typeTournament: req.body.typeTournament,
        tournamentDate: req.body.tournamentDate
        },(err,result) =>{
            if(err)
            throw err;
            console.log(`Updated Tournament Successfully`);
            res.json('Updated Tournament Successfully');
        });
    });

    routers.delete('/deleteTeam',async(req,res)=>{
    team.deleteOne({emailAdress:req.body.emailAdress},{
    },(err,result) =>{
      if(err)
      throw err;
      console.log(`Deleted Team Successfully`);
      res.json('Delete Team Successfully');
    });
});

routers.delete('/deleteTournament',async(req,res)=>{
    tournament.deleteOne({tournamentDate:req.body.tournamentDate},{
    },(err,result) =>{
      if(err)
      throw err;
      console.log(`Deleted Tournament Successfully`);
      res.json('Delete Tournament Successfully');
    });
});

routers.get('/viewTournaments',async(req,res)=>{
        tournament.find({},(err,result)=>{
        if(err)
        throw err;
        console.log(`View All Tournaments Successfully`);
        res.json(result);
    });
})

routers.get('/viewTeams',async(req,res)=>{
        team.find({},(err,result)=>{
        if(err)
        throw err;
        console.log(`View All Teams Successfully`);
        res.json(result);
    });
})

module.exports = {
    routers
}