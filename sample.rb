class Player
  def hand
    p "数字を入力してください。"
    p "0: グー"
    p "1: チョキ"
    p "2: パー"
    gets
  end
end

class Enemy
  def hand
    rand(3)
  end
end

class Janken
  def pon(player_hand, enemy_hand)
    enemy_result = ["グー","チョキ","パー"]
    if  player_hand == "0\n" || player_hand == "1\n" || player_hand == "2\n"
        player_hand = player_hand.to_i
        judge = (player_hand-enemy_hand+3)%3
        case judge
            when 0
              p "相手の手は#{enemy_result[enemy_hand]}です。あいこです。"
              return re_jnkn
            when 2
              p "相手の手は#{enemy_result[enemy_hand]}です。あなたの勝ちです。"
            when 1
              p "相手の手は#{enemy_result[enemy_hand]}です。あなたの負けです。"
        end
    else
            p "「0〜2の数字を入力してください"
            return re_jnkn
          end
        end
      end
      
def re_jnkn
  player = Player.new
  enemy = Enemy.new
  janken = Janken.new
  janken.pon(player.hand, enemy.hand)
end

player = Player.new
enemy = Enemy.new
janken = Janken.new

# 下記の記述で、ジャンケンメソッドが起動される
janken.pon(player.hand, enemy.hand)

# ここに書かれているRubyの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
