<template>
    <div class="background">
        <div class="index container">
            <div class="card transparent z-depth-4" v-for="smoothie in smoothies" :key="smoothie.id">
                <div class="card-content">
                    <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
                    <h2 class="indigo-text">{{ smoothie.title }}</h2>
                    <ul class="ingredients">
                        <li v-for="(ing, index) in smoothie.ingredients" :key="index">  
                            <span class="chip">{{ ing }}</span>
                        </li>
                    </ul>
                </div>
                <router-link :to="{ name: 'EditSmoothie', params: { smoothie_slug: smoothie.slug }}">
                    <span class="btn-floating btn-large halfway-fab pink">
                        <i class="material-icons edit">edit</i>
                    </span>                   
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: "Index",
    data(){
        return {
            smoothies: []
        }
    },
    methods: {
        deleteSmoothie(id) {
            db.collection('smoothies').doc(id).delete()
            .then(() =>{
                this.smoothies = this.smoothies.filter(smoothie => {
                return smoothie.id != id
                })
            });
           
        }
    },
    created(){
        db.collection('smoothies').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                //console.log(doc.data(), 'id:' + doc.id);
                let smoothie = doc.data();
                smoothie.id = doc.id;
                this.smoothies.push(smoothie)
            });
        })
    }
}
</script>

<style>
.index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-top: 0px;
    padding: 60px;
}
.index h2{
    font-weight: 600;
    font-size: 2.2em;
    text-align: center;
    margin-top: 0;
}
.index .ingredients{
    margin: 30px auto;
}
.index .ingredients li{
    display: inline-block;
}
.index .delete{
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4ems;
}
.background{
    background: url("../assets/coconut-smoothie.jpg");
    background-repeat: no-repeat;
    height: 100vh;
    background-size: cover;
}
</style>