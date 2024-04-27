
interface Game{
    id:string,
    whitePlayerName:string,
    blackPlayerName:string,
    moves:string[],
}

export class GameManager{
    games:Game[]=[];
    private static instance: GameManager;
    constructor(){
        this.games=[]
    }
    static getInstance(){
        if(!GameManager.instance){
            GameManager.instance=new GameManager()
        }
        return GameManager.instance
    }

    addMove(gameId:string,move:string){
        console.log(`Adding move ${move} to game ${gameId}`)
        const game= this.games.find(g=>g.id===gameId)
        game?.moves.push(move)
    }
    addGame(gameId:string){
        const game={
            id:gameId,
            whitePlayerName:"Alice",
            blackPlayerName:"Bob",
            moves:[]
        }
        this.games.push(game)
    }

    log(){
        console.log(this.games)
    }


}

export const gameManager=GameManager.getInstance()