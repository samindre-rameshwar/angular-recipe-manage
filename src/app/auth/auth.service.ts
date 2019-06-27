import * as firebase from 'firebase';
export class  AuthService{
    token:string;
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