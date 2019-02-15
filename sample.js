$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    
    
    let average = sum/subject_points.length;
    $("#avarage_indicate").text(average);
    return average;
    // ここに、上記を参考にして平均点を出力する処理を書き込む
  };
  
  
  function sum_r(){
      let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
        return subject_points;
                        
  }

  function get_achievement(){
     let average_r = score_indicate();
     if(average_r >= 80){
         return "A";
        }
        else if(average_r >= 60){
            return "B";
        }
        else if(average_r >= 40){
            return "C";
        }
        else{
            return "D";
        }
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  }

  function get_pass_or_failure(){
       let sum = sum_r();
       let number = sum.length;
       let judge = "合格";
       for(let i=0;i<number;i++){
           if (sum[i]<60){
               judge = "不合格";
           }
          return judge;
       }
    
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
  }

  function judgement(){
    let achievement = get_achievement()
    let judge = get_pass_or_failure()
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${judge}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    let rank = get_achievement();
    $("#evaluation").text(rank);
  });

  $('#btn-judge').click(function() {
    let judge = get_pass_or_failure();
     $("#judge").text(judge);
    
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});