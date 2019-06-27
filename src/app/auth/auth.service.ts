import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class  AuthService{
    token:string;

    constructor(private router:Router) {}
    


    signUpUser(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
            error=>console.log(error)
        )
    }

    signInUser(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            resp =>{
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken().then(
                    (jwtToken:string)=>this.token = jwtToken
                )
            }
        ).catch(
            err=>console.log(err)
        );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (jwtToken:string)=>this.token = jwtToken
        );
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }

    logOut(){
        firebase.auth().signOut();
        this.token = null;
    }
}