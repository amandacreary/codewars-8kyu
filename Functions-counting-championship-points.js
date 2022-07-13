//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match: if x > y: 3 points; if x < y: 0 point; if x = y: 1 point. Notes: there are 10 matches in the championship ; 0 <= x <= 4 ; 0 <= y <= 4
function points(games) {
    let answer = 0
      for(const score of games) {
          const arr = score.split(":")
          if(Number(arr[0]) > Number(arr[1])) {
              answer += 3
          } else if (Number(arr[0]) == Number(arr[1])) {
              answer += 1
          }
      }
  
      return answer
  }