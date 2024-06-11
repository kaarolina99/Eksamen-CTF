<script>
    import BeskC from "./beskC.svelte";
    import kniv from "./img/bloodyknife.jpeg";
    import Navbar from "./Navbar.svelte";


</script>

<div>
        <div>
            <Navbar></Navbar>
            <BeskC></BeskC>
        </div>
    <img class="imgknife" src={kniv} alt="knife">
</div>

<style>

    .imgknife{
        width: 100%;
        height: 100%;
        z-index: -1;
    } 

    :global(body){
        position: relative;
        background-color: black;
        background-image: url("https://github.com/kaarolina99/Eksamen-CTF/blob/main/svelte/src/routes/img/bloodyknife.jpeg");
        background-repeat: no-repeat; 
        background-attachment: fixed;
        margin: 0;
    }

</style>


