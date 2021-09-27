

const ticTacToe=(()=>{
    const array = [];
    var yourTurn=0;

    const array_1=Array(3);
    array_1[0]=Array(3);
    array_1[1]=Array(3);
    array_1[2]=Array(3);
    
    const show = document.querySelector('section.show-winner');
    const restart=document.querySelector('button#restart');
    
    const play=(frame, position_1, position_2)=>{
        var point=0;
        if(frame.innerText==''){
            if(yourTurn%2 ==1){
                frame.innerText='X';
                point=1;
            }else{
                frame.innerText='O';
                point=-1;
            }
            yourTurn++;
        }
        array_1[position_1][position_2]=point;
        point=0;
    
    }
    const winnerOrLoss=()=>{
        var sum_0=0;
        var sum_1=0;
        var sum_2=0;
        var sum_3=0;
        var sum_4=0;
        var sum_5=0;
        var sum_6=0;
        var sum_7=0;
        var cont=0;
        for(let i=0;i<9;i++){
            if(array[i].innerText !=''){
                cont++;
                if(cont===9){
                    showWinner(cont);
                }
            }
        }
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){ 
                //line sum
               if(array_1[i][j]=== 1){
                    sum_0 +=array_1[i][j];
               }
               if(array_1[i][j]=== -1){
                    sum_1 +=array_1[i][j];
                }
                //lateral sum
                if(array_1[j][i]===1){
                    sum_2+=array_1[j][i];
                }if(array_1[j][i]===-1){
                    sum_3+=array_1[j][i];
                }
                //diagonal sum
                if(i===j){                
                    if(array_1[i][j]===1){
                        sum_4+=array_1[i][j];
                    }else if(array_1[i][j]===-1){
                        sum_5+=array_1[i][j];
                    }
                    //console.log(`estou em ${sum_4},${sum_5},`);
                }
            }
            if(sum_0===3){
               showWinner(sum_0);
            }else if(sum_1===-3){
                showWinner(sum_1);
            }else if(sum_2===3){
                showWinner(sum_2);
            }else if(sum_3===-3){
                showWinner(sum_3);
            }else if(sum_4===3){
               showWinner(sum_4);
            } else if(sum_5===-3){
                showWinner(sum_5);
            }
            else{
                sum_0=0;
                sum_1=0;
                sum_2=0;
                sum_3=0;
                
            }
            
        }
        for(let i=0;i<3;i++){
            for(let j=2; j>=0; j--){
                if(i+j==2){
                    if(array_1[i][j]===1){
                        sum_6+=array_1[i][j];
                    }else if(array_1[i][j]===-1){
                        sum_7+=array_1[i][j];
                    }
                    
                }
            }
            if(sum_6===3){
                showWinner(sum_6);
            }else if(sum_7===-3){
                showWinner(sum_7);
            }
        }
        
        
    }
    const showWinner=(points)=>{
   
        const winner= document.querySelector('div.winnerOrDraw');
        show.style.display="flex";
        if(points===3){
            winner.innerHTML='X Win';
        } else if(points===-3){
            winner.innerHTML='O Win';
        }else if(points===9){
            winner.innerHTML='Draw';
        }
    }
    restart.addEventListener('click',()=>{
        for(let i=0; i<9;i++){
            array[i].innerText='';        
        }
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                array_1[i][j]=0;
            }
        }
        show.style.display='none';
    });
    const start=()=>{
        for(let i=0; i<9; i++){
            array[i] = document.getElementsByClassName('item')[i];
            array[i].addEventListener('click', ()=>{
                let codeName=array[i].id;
                var lineCol=codeName.split('-');
                var line = Number.parseInt(lineCol[1]/10)
                var col = Number.parseInt(lineCol[1]%10)
                
                if(array[i].innerText==''){
                   play(array[i], line, col);
                   winnerOrLoss(); 
                }        
                
            });
          
        }
    }

    return{start,showWinner,restart}
})();
ticTacToe.start();
ticTacToe.showWinner();
ticTacToe.restart;

