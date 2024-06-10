<script>
    import kniv from "./img/bloodyknife.jpeg";
    import Navbar from "./Navbar.svelte";
</script>

<div>
    <Navbar></Navbar>
    <h1 class = "MMCTF"> Murder Mystery CTF </h1>
        <div>
            <h4 class="discription1"> I denne spennende CTF utfordringen, inntar du rollen som en detektiv som må løse et grusomt mord.</h4>
            <h4 class="discription2"> Du må finne liket, identifisere gjerningsvåpenet og samle biologiske spor for å avsløre morderen. </h4>
            <h4 class="discription3"> Bruk dine ferdigheter innen etterforskning og problemløsning for å hjelpe detektiven med å løse saken og bringe rettferdighet til offeret.</h4>
            <h4 class="discription4"> Klarer du å samle alle bevisene og løse mysteriet? Din hjelp er avgjørende for å oppklare denne mystiske forbrytelsen. </h4>
            <div>
                <form>
                    
                </form>
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
    .discription1{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 90px;
        text-shadow: 2px 1px darkslategrey;
    }
    .discription2{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 110px;
        text-shadow: 2px 1px darkslategrey;
    }
    .discription3{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 130px;
        text-shadow: 2px 1px darkslategrey;
    }

    .discription4{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 150px;
        text-shadow: 2px 1px darkslategrey;
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


<!-- <h1>Skriv deg opp i kø</h1>
                <form id="queueList" on:submit={handleSubmit}>
                    <label for="Navn"> Navn </label>
                    <br />
                    <input
                        type="text"
                        id="Navn_"
                        name="navn"
                        bind:value={navnInput}
                        on:keydown={handleKeyDown}
                    />
                    <br />
                    <label for="Sted"> Sted </label>
                    <br />
                    <input
                        type="text"
                        id="Sted_"
                        name="sted"
                        bind:value={stedInput}
                        on:keydown={handleKeyDown}
                    />
                    <br /><br />
                    <input type="Submit" value="Submit">
                </form> -->