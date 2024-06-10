<script>
    import kniv from "./img/bloodyknife.jpeg";
    import Navbar from "./Navbar.svelte";


    let flagg1Input = ""
    let flagg2Input = ""
    let flagg3Input = ""


    function handleKeyDown(event){
        if (event.keyCode === 13) {
            console.log("Enter key was pressed");
        }
    }



    function checkWeapon(){
        const weaponFlag = "mm{hammer}"

        if (weaponFlag === flagg1Input) {
            alert("Du fant gjerningsvåpenet!")
        
    } else {
        alert("Prøv igjen")        
    }
    }
    
    function checkDna(){
        const dnaFlag = "mm{sædDNA}"

        if (dnaFlag === flagg2Input) {
            alert("Du fant Biologisk spor!")
        
    } else {
        alert("Prøv igjen")        
    }
    }


    function checkPlace(){
        const placeFlag = "mm{bagasjerom}"

        if (placeFlag === flagg3Input) {
            alert("Du fant gjerningsvåpenet!")
        
    } else {
        alert("Prøv igjen")        
    }
    }

</script>

<div>
        <div>
            <Navbar></Navbar>
            <h1 class = "MMCTF"> Murder Mystery CTF </h1>
            <h3 class="discription1"> I denne spennende CTF utfordringen, inntar du rollen som en detektiv som må løse et grusomt mord.</h3>
            <h3 class="discription2"> Du må finne liket til Philippa Britton, identifisere gjerningsvåpenet og samle biologiske spor for å avsløre morderen. </h3>
            <h3 class="discription3"> Bruk dine ferdigheter innen hacking for å hjelpe detektiven med å løse saken og bringe rettferdighet til offeret.</h3>
            <h3 class="discription4"> Klarer du å samle alle bevisene og løse mysteriet? Din hjelp er avgjørende for å oppklare denne mystiske forbrytelsen. </h3>
            <div class="flagg">
                <form on:submit={checkWeapon} > <!-- on:submit={handleSubmit} -->
                    <input
                        type="text"
                        id="Flagg1"
                        name="flagg1"
                        placeholder="Gjerningsvåpen"
                        bind:value={flagg1Input}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
                </form>
                    <br />
                    <form on:submit={checkDna} >
                    <input
                        type="text"
                        id="Flagg2"
                        name="flagg2"
                        placeholder="Biologisk Spor"
                        bind:value={flagg2Input}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
                </form>
                    <br />
                    <form on:submit={checkPlace} >
                    <input
                        type="text"
                        id="Flagg3"
                        name="flagg3"
                        placeholder="Philippa Britton"
                        bind:value={flagg3Input}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
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

    :global(body){
        position: relative;
        background-color: black;
        background-image: url("https://github.com/kaarolina99/Eksamen-CTF/blob/main/svelte/src/routes/img/bloodyknife.jpeg");
        background-repeat: no-repeat; 
        background-attachment: fixed;
        margin: 0;
    }

    .MMCTF{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 100px;
        text-shadow: 2px 1px #181818;

    }
    .discription1{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 170px;
        text-shadow: 2px 1px #181818;
    }
    .discription2{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 190px;
        text-shadow: 2px 1px #181818;
    }
    .discription3{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 210px;
        text-shadow: 2px 1px #181818;
    }

    .discription4{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 230px;
        text-shadow: 1.5px 1px #181818;
    }

    .flagg{
        position: absolute;
        margin-left: 20px;
        margin-top: 280px;
    }

</style>


