<script>
    let weaponInput = ""
    let dnaInput = ""
    let corpseInput = ""


    function handleKeyDown(event){
        if (event.keyCode === 13) {
            console.log("Enter key was pressed");
        }
    }

    function checkWeapon(){
        const weaponFlag = "mmCTF{hammer}"

        if (weaponFlag === weaponInput) {
            alert("Du fant gjerningsvåpenet!")
        
    } else {
        alert("Prøv igjen")        
    }
    }
    
    function checkDna(){
        const dnaFlag = "mmCTF{sædSpor}"

        if (dnaFlag === dnaInput) {
            alert("Du fant Biologisk spor!")
        
    } else {
        alert("Prøv igjen")        
    }
    }


    function checkPlace(){
        const placeFlag = "mmCTF{bagasjerom}"

        if (placeFlag === corpseInput) {
            alert("Du fant gjerningsvåpenet!")
        
    } else {
        alert("Prøv igjen")        
    }
    }
</script>


<div class="innhold">
    <h1 class = "MMCTF"> Murder Mystery CTF </h1>
            <h3 class="description">
                I denne spennende CTF utfordringen, inntar du rollen som en detektiv som må løse et grusomt mord.<br>
                Du må finne liket til Philippa Britton, identifisere gjerningsvåpenet og samle biologiske spor for å avsløre morderen.<br>
                Bruk dine ferdigheter innen hacking for å hjelpe detektiven med å løse saken og bringe rettferdighet til offeret.<br>
                Klarer du å samle alle bevisene og løse mysteriet? Din hjelp er avgjørende for å oppklare denne mystiske forbrytelsen.
            </h3>
            <div class="flagg">
                <form on:submit={checkWeapon}> 
                    <input
                        type="text"
                        id="weapon"
                        name="Weapon"
                        placeholder="Gjerningsvåpen"
                        bind:value={weaponInput}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
                </form>
                    <br />
                    <form on:submit={checkDna}>
                    <input
                        type="text"
                        id="dna"
                        name="Dna"
                        placeholder="Biologisk Spor"
                        bind:value={dnaInput}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
                </form>
                    <br />
                    <form on:submit={checkPlace}>
                    <input
                        type="text"
                        id="corpse"
                        name="Corpse"
                        placeholder="Philippa Britton"
                        bind:value={corpseInput}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
                </form>
            </div>
    </div>


<style>
    .innhold{
        top: 0;
    z-index: 3; 
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
    .description{
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        margin-left: 20px;
        margin-top: 170px;
        text-shadow: 2px 1px #181818;
    }


    .flagg{
        position: absolute;
        margin-left: 20px;
        margin-top: 280px;
    }

</style>
