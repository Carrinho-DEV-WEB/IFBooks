<script setup>
</script>

<template>
    <Header />

    <section class="banner">

        <div class="description-autor">
            <button class="secondary">
                Autor de Abril
            </button>
            <h1> Eric-Emanuel Schmitt </h1>
            <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
            <button class="primary">Acessar página do livro</button>
        </div>

        <img src="/public/images/livroBanner.png" alt="Nocognia book">
    </section>
</template>

<style scoped>
/*========================
        BANNER
*==========================*/

.banner{
    display: flex;
    align-items: center;
    margin: 2vw 5vw;
}

.description-autor h1{
    font-size: 3.5em;
    font-weight: bold;
    margin: 1vw 0 2vw 0;
}

.description-autor p{
    font-size: 1.5em;
    width: 70%;
    margin-bottom: 2vw;
}
</style>
