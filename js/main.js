let app = new Vue({
    el: '.main',
    data: {
        showMain: true,
        showSocial: false,
        showAchivments: false,
        showQuestions: false,
        showResult: false,
        showHol: false,
        showSang: false,
        showFleg: false,
        showMel: false,
        number: 0,
        score: {
            'zerg': 0,
            'primal': 0,
            'terran': 0,
            'infested': 0
        },
        totalGame: localStorage.getItem('sc2TotalGames') ? JSON.parse(localStorage.getItem('sc2TotalGames')) : {
            'zerg': 0,
            'primal': 0,
            'terran': 0,
            'infested': 0,
            'protoss': 0,
            'taldarim': 0,
            'hybrid': 0,
        },
        totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames') : 0,
        questions: questions, 
        results: results,
        resultRace: 'infested',
    },
    methods: {
        goToMain() {
            this.showMain = true
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
        },
        goToSocial() {
            this.showMain = false
            this.showSocial = true
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
        },
        goToAchivments() {
            this.showMain = false
            this.showSocial = false
            this.showAchivments = true
            this.showQuestions = false
            this.showResult = false
            this.showHol = false
            this.showSang = false
            this.showFleg = false
            this.showMel = false
               },
        goToQuestions() {
            this.score = {
            'zerg': 0,
            'primal': 0,
            'terran': 0,
            'infested': 0
            }
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = true
            this.showResult = false
        },
        goToResult(race) {
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = true
            this.resultRace = race
        },
        goToHol() {
            this.showAchivments = false
            this.showHol = true
            this.showSang = false
            this.showFleg = false
            this.showMel = false
        },
        goToSang() {
            this.showAchivments = false
            this.showHol = false
            this.showSang = true
            this.showFleg = false
            this.showMel = false
        },
        goToFleg() {
            this.showAchivments = false
            this.showHol = false
            this.showSang = false
            this.showFleg = true
            this.showMel = false
        },
        goToMel() {
            this.showAchivments = false
            this.showHol = false
            this.showSang = false
            this.showFleg = false
            this.showMel = true
        },
        nextQuestions(answer) {
            if(this.number == 24) {
                this.number = 0
                this.endGame()
            } else {
                this.number++
            }
        eval(answer) 
        },
        endGame() {
            this.totalGames++;
            localStorage.setItem('sc2TotalGames', this.totalGames)
            if(this.score.zerg > this.score.primal &
            this.score.zerg > this.score.terran & 
            this.score.zerg > this.score.infested &
            this.score.zerg > this.score.protoss &
            this.score.zerg > this.score.taldarim &
            this.score.zerg > this.score.hybrid) {
                this.goToResult('zerg')
                this.totalGame.zerg++
            } else if(this.score.primal > this.score.zerg &
            this.score.primal > this.score.terran & 
            this.score.primal > this.score.infested &
            this.score.primal > this.score.protoss &
            this.score.primal > this.score.taldarim &
            this.score.primal > this.score.hybrid) {
                this.goToResult('primal')
                this.totalGame.primal++
            } else if(this.score.terran > this.score.zerg &
            this.score.terran > this.score.primal & 
            this.score.terran > this.score.infested &
            this.score.terran > this.score.protoss &
            this.score.terran > this.score.taldarim &
            this.score.terran > this.score.hybrid) {
                this.goToResult('terran')
                this.totalGame.terran++
            } else {
                this.goToResult('infested')
                this.totalGame.infested++
            }
            localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame))
        }
    }
})
let audio = new Audio('audio/soundtrack.mp3')
let audio_btn = document.querySelector('.btn__sound')
let audio_icon = document.querySelector('.btn__sound i')

audio.muted = true;
audio.autoplay = true;
audio.volume = 0.2

audio_btn.addEventListener('click', function(){
    if(audio.muted) {
        audio.muted = false
        audio_icon.classList.add('fa-volume-up')
        audio_icon.classList.remove('fa-volume-off')
    } else if(!audio.muted) {
        audio.muted = true
        audio_icon.classList.add('fa-volume-off')
        audio_icon.classList.remove('fa-volume-up')
    }
})