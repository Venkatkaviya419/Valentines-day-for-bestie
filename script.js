const PASSWORD = "bestie_koko";

const messages = {
  1: `Hey koko, my favorite human 💖
Happy Valentine’s Day.
I know today is full of couples, flowers, and all that loud romantic energy. But when I think about love — the real kind, the steady and unconditional kind — I think about the people who stay through every version of you. And you’ve always stayed.
We started as two MBBS students in a foreign country, just trying to survive anatomy exams and homesickness. Out of everyone in that batch, somehow fate decided we’d walk those six years side by side.
From Brokenshire classrooms to DMSF chaos…
From exam panic to that post-exam relief…
From “we’re definitely failing” to “see, we survived again”…
We didn’t just study medicine together.
We grew up together.
You’ve seen my stress, my overthinking, my random moods — and you still chose to stick around. That’s not something I take lightly. That kind of friendship is rare.
Being single today doesn’t mean you’re missing anything. It just means the world hasn’t caught up to your worth yet.
You are strong. You are kind. You are emotionally honest. And you deserve a love that feels safe, steady, and secure.
But until someone proves they deserve a place in your life, just know — you already have someone who values you deeply.
Even if we’re in different states now…
Even if life gets busy…
Even if hospitals and responsibilities take over…
If you ever feel overwhelmed, sad, or just need to vent, text me “2 mins?” — and I’ll show up. Not because I have to. But because I want to.
Some friendships are temporary. Some are convenient. Ours was built in a foreign land, tested by pressure, and strengthened by time.
And this is the one thing I always want you to remember:
No matter who comes into your life, no matter where life posts us next — you will never have to question whether you matter to me. That answer isn’t temporary. It’s permanent.
Happy Valentine’s Day, koko 💖.
Single? Maybe.
But never unseen.
Never unvalued.
Never alone.
Always in your corner.`
};

function unlock() {
  const input = document.getElementById("password").value;

  if (input === PASSWORD) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("content").style.display = "block";

    const music = document.getElementById("bg-music");
    music.volume = 0.4;
    music.play().catch(() => {});
  } else {
    alert("Wrong password 🖤");
  }
}

function showDay(day) {
  const box = document.getElementById("message-box");
  box.innerHTML = "";

  const text = messages[day];
  let i = 0;

  const typing = setInterval(() => {
    box.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 28);
}


