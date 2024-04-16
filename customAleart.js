
const CustomAlert = (selector, prams) => {


    const { title, message } = prams

    let timer = prams.timer ? prams.timer : 5000

    $("body").prepend(` 
        <span class="overlay"></span>
    <div class="modal-box">
        ${prams.icon == "success" ? `<i class="success-icon fa-regular  fa-circle-check"></i> ` : prams.icon == "error" ? ` <i class="error-icon fa-regular fa-circle-xmark"></i>` : prams.icon == "warning" ? `<i class="warning-icon fa-solid fa-exclamation"></i>` : " "}
        <h2>${title}</h2>
        <h3>${message}</h3>

        <div class="buttons">
            <button class="close-btn">OK</button>

        </div>
    </div>`)

    $(selector).click(() => $("body").addClass("active"))
    $(".overlay").click(() => $("body").removeClass("active"))
    $(".close-btn").click(() => $("body").removeClass("active"))
    console.log($("body").hasClass("active"))
    $(selector).click(() => {
        setTimeout(() => {
            $("body").removeClass("active");


        }, timer)
    });

}

