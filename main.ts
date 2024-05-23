function quest1() {
    music.play(music.createSong(assets.song`
            Beat1`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`cass0`)
    adventure.addToTextlog("You're looking for a Cassowary, a large colorful bird from New Guinea.")
    adventure.addToTextlog("Press (A) to enter the forests of Northern New Guinea.")
    adventure.addToTextlog("Press (B) to give up and go home.")
    while (!(controller.A.isPressed() || controller.B.isPressed())) {
        pause(100)
    }
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Fact about New Guinea's cassowary habitats.")
        quest2()
    } else {
        adventure.addToTextlog("You haven't found a cassowary yet!")
        game.over(false)
    }
    
}

function quest2() {
    music.play(music.createSong(assets.song`
    quest_from_the_king`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`
    cass1`)
    adventure.addToTextlog("You reach a forest in New Guinea.")
    adventure.addToTextlog("Press (A) to look left.")
    adventure.addToTextlog("Press (B) to look right.")
    while (!(controller.A.isPressed() || controller.B.isPressed())) {
        pause(100)
    }
    if (controller.A.isPressed()) {
        adventure.addToTextlog("You found one!")
        quest3()
    } else {
        adventure.addToTextlog("Nothing to see here...")
        quest2()
    }
    
}

function quest3() {
    music.play(music.createSong(assets.song`
    beat1`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`
    cass1`)
    adventure.addToTextlog("You found the cassowary, what do you do?")
    adventure.addToTextlog("Press (A) to approach it.")
    adventure.addToTextlog("Press (B) to note the location for scientists.")
    while (!(controller.A.isPressed() || controller.B.isPressed())) {
        pause(100)
    }
    if (controller.A.isPressed()) {
        adventure.addToTextlog("It makes a scary noise and runs into the forest.")
        quest4()
    } else {
        adventure.addToTextlog("The cassowary's head pops up, and then it retreats into the deep forest.")
        game.over(false)
    }
    
}

function quest4() {
    music.play(music.createSong(assets.song`
    beat1`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`
    cass1`)
    adventure.addToTextlog("What's one thing you learned about Northern Cassowary?")
    adventure.addToTextlog("Press (A) if they are from New Guinea.")
    adventure.addToTextlog("Press (B) if they can fly.")
    while (!(controller.A.isPressed() || controller.B.isPressed())) {
        pause(100)
    }
    if (controller.A.isPressed()) {
        adventure.addToTextlog("It makes a scary noise and runs into the forest.")
        quest1()
    } else {
        adventure.addToTextlog("The cassowary's head pops up, and then it retreats into the deep forest.")
        game.over(false)
    }
    
}

quest1()
