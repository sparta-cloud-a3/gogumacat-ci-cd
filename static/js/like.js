function toggle_like(idx) {

    if ($("#heart").hasClass("fa-solid")) {
        $.ajax({
            type: "POST",
            url: "/update_like",
            data: {
                idx_give: idx,
                action_give: "unlike"
            },
            success: function (response) {
                console.log("unlike")
                $("#heart").addClass("fa-regular").removeClass("fa-solid")
                $("#heart-count-box").text(num2str(response["count"]))
                $("#heart_a").removeClass("jello-horizontal")
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "/update_like",
            data: {
                idx_give: idx,
                action_give: "like"
            },
            success: function (response) {
                console.log("like")
                $("#heart").addClass("fa-solid").removeClass("fa-regular")
                $("#heart-count-box").text(num2str(response["count"]))
                $("#heart_a").addClass("jello-horizontal")
            }
        })
    }
}

function num2str(count) {
    if (count > 10000) {
        return parseInt(count / 1000) + "k"
    }
    if (count > 500) {
        return parseInt(count / 100) / 10 + "k"
    }
    if (count == 0) {
        return ""
    }
    return count
}

function roadview() {
    $('#map').toggleClass('is-hidden')
    $('#roadview').toggleClass('is-hidden')
    if ($('#map').hasClass('is-hidden')) {
        $('#map_btn').text("지도 보기")
    } else {
        $('#map_btn').text("로드뷰 보기")
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}