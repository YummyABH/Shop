<script>
export default {
    data() {
        return {
        }
    },
    name: 'Video',
    components: {
    },
}
</script>
    
<template>
    <div class="ProductVideo">
        <div class="title">Видео</div>
        <div class="video">
            <iframe class="item-video" src="https://www.youtube.com/embed/on9TXY8kYyk?si=pg3rG9S-dMwHLkd_"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>
  
  
<style scoped>
.ProductVideo {
    margin: 60px 0px;
}

.title {
    margin-bottom: 24px;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.24px;
    color: var(--text-dark);
}

.video {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    background-color: #000;
}

.item-video {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
}

@media (max-width: 768px) {
    .title {
        line-height: 24px;
        font-size: 18px;
    }
}
</style>