
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        
        const player = { x: 175, y: 450, width: 50, height: 10, speed: 5 };
        let obstacles = [];
        let score = 0;
        let gameRunning = true;
        
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft" && player.x > 0) player.x -= player.speed;
            if (event.key === "ArrowRight" && player.x + player.width < canvas.width) player.x += player.speed;
        });
        
        function createObstacle() {
            const width = Math.random() * 80 + 20;
            const x = Math.random() * (canvas.width - width);
            obstacles.push({ x, y: 0, width, height: 15, speed: 3 });
        }
        
        function updateGame() {
            if (!gameRunning) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw Player
            ctx.fillStyle = "blue";
            ctx.fillRect(player.x, player.y, player.width, player.height);
            
            // Draw Obstacles
            ctx.fillStyle = "red";
            obstacles.forEach((obs, index) => {
                obs.y += obs.speed;
                ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
                
                // Collision Detection
                if (
                    player.x < obs.x + obs.width &&
                    player.x + player.width > obs.x &&
                    player.y < obs.y + obs.height &&
                    player.y + player.height > obs.y
                ) {
                    gameRunning = false;
                    alert(`Game Over! Your score: ${score}`);
                    location.reload();
                }
            });
            
            score++;
            ctx.fillStyle = "black";
            ctx.fillText(`Score: ${score}`, 10, 20);
            
            if (Math.random() < 0.02) createObstacle();
            requestAnimationFrame(updateGame);
        }
        
        updateGame();
