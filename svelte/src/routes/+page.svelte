<script>
import kniv from "./img/bloodyknife.jpeg";
</script>

<div>
    <div>
    <h1 class = "MMCTF"> Murder Mystery CTF </h1>
    <!-- <img class="imgknife" src={kniv} alt="knife"> -->
        <div>
            <div>

            </div>
        </div>
    </div>
    <img class="imgknife" src={kniv} alt="knife">
</div> 



<style>

    .imgknife{
        width: 100%;
        height: 100%;
        z-index: -1;
    } 

    .MMCTF{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 30px;
        text-shadow: 2px 1px darkslategrey;

    }

    :global(body){
        position: relative;
        background-color: black;
        background-image: url(https://github.com/kaarolina99/Eksamen-CTF/blob/main/svelte/src/routes/img/bloodyknife.jpeg);
        /* background-size: cover; */
        background-repeat: no-repeat; 
        background-attachment: fixed;
        margin: 0;
        
        /* height: 100vh; */
    }
</style>
