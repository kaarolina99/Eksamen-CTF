<script>
    let weaponInput = ""
    let dnaInput = ""
    let corpseInput = ""


    async function submitFlag(bevis, flag) {
  try {
    const response = await fetch(`http://localhost:8000/checkFlag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bevis, flag }),
    });
    const result = await response.json();
    if (result.success) {
      alert("Du fant flagget!");
    } else {
      alert("Prøv igjen!");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
}



    function handleweaponSubmit(event) {
        event.preventDefault();
        submitFlag("våpen", weaponInput);
    }

    function handleDnaSubmit(event) {
        event.preventDefault();
        submitFlag("dna", dnaInput);
    }  

    function handleCorpseSubmit(event) {
        event.preventDefault();
        submitFlag("lik", corpseInput);
    }

    function handleKeyDown(event){
        if (event.keyCode === 13) {
            console.log("Enter key was pressed");
        }
    }

    // function checkWeapon(){
    //     const weaponFlag = "mmCTF{hammer}"

    //     if (weaponFlag === weaponInput) {
    //         alert("Du fant gjerningsvåpenet!")
        
    // } else {
    //     alert("Prøv igjen")        
    // }
    // }
    
    // function checkDna(){
    //     const dnaFlag = "mmCTF{sædSpor}"

    //     if (dnaFlag === dnaInput) {
    //         alert("Du fant Biologisk spor!")
        
    // } else {
    //     alert("Prøv igjen")        
    // }
    // }


    // function checkPlace(){
    //     const placeFlag = "mmCTF{bagasjerom}"

    //     if (placeFlag === corpseInput) {
    //         alert("Du fant gjerningsvåpenet!")
        
    // } else {
    //     alert("Prøv igjen")        
    // }
    // }

    function hintWeapon(){
        alert("Har du merkert åstedet?")
    }

    function hintDna(){
        alert("Hmm..Er det bare roboter som kan finne veien?")
    }

    function hintCorpse(){
        alert("Lurer på om fotografen har gjemt noe?")
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
                <form on:submit={handleweaponSubmit}> 
                    <input
                        type="text"
                        id="weapon"
                        name="Weapon"
                        placeholder="Gjerningsvåpen"
                        bind:value={weaponInput}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
                    <button on:click={hintWeapon}>?</button>
                </form>
                    <br />
                    <form on:submit={handleDnaSubmit}>
                    <input
                        type="text"
                        id="dna"
                        name="Dna"
                        placeholder="Biologisk Spor"
                        bind:value={dnaInput}
                        on:keydown={handleKeyDown}
                    />
                    <input type="Submit" value="Submit">
                    <button on:click={hintDna}>?</button>
                    </form>
                        <br />
                        <form on:submit={handleCorpseSubmit}>
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
                    <button on:click={hintCorpse}>?</button>
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
