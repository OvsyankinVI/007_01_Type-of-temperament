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
            'Fleg': 0,
            'Mel': 0,
            'Hol': 0,
            'Sang': 0
        },
        questions: questions, 
        results: results,
        resultType: 'Mel',
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
                'Fleg': 0,
                'Mel': 0,
                'Hol': 0,
                'Sang': 0            
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
            this.resultType = race
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
            if(this.number == 13) {
                this.number = 0
                this.endGame()
            } else {
                this.number++
            }
        eval(answer) 
        },
        endGame() {
            localStorage.setItem('sc2TotalGames', this.totalGames)
            if(this.score.Hol > this.score.Sang &
            this.score.Hol > this.score.Fleg & 
            this.score.Hol > this.score.Mel) {
                this.goToResult('Hol')
            } else if(this.score.Sang > this.score.Hol &
            this.score.Sang > this.score.Fleg & 
            this.score.Sang > this.score.Mel) {
                this.goToResult('Sang')
            } else if(this.score.Fleg > this.score.Hol &
            this.score.Fleg > this.score.Sang & 
            this.score.Fleg > this.score.Mel) {
                this.goToResult('Fleg')
            } else {
                this.goToResult('Mel')
            }
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
