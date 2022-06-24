import googleImage from '../../images/googletranslate.png'
import imageAngular from '../../images/AngularProj.png'
import imageBlog from '../../images/fragranceblog.png'
import journalImage from '../../images/ejsjournal.png'
import todoList from '../../images/todo.png'
import streamImage from '../../images/streamio.png'
import urlShort from '../../images/urlshortenerapp.png'

export const portfolioData = [
    {
        sectionId: 3,
        projectName: 'Google Translation',
        projectLink: 'https://github.com/binyamdawit/Google-Translation-Clone',
        image: googleImage
    },
    {
        sectionId: 3,
        projectName: 'Fragrance Blog',
        projectLink: 'https://github.com/binyamdawit/Blogging-Fragrance',
        image: imageBlog
    },
    {
        sectionId: 4,
        projectName: 'Messaging Application',
        projectLink: 'https://github.com/binyamdawit/Messaging-Application',
        image: streamImage
    },
    {
        sectionId: 2,
        projectName: 'Journal',
        projectLink: 'https://github.com/binyamdawit/daily-journal-ejs',
        image: journalImage
    },
    {
        sectionId: 2,
        projectName: 'Todo List',
        projectLink: 'https://github.com/binyamdawit/Todo-List',
        image: todoList
    },
    {
        sectionId: 3,
        projectName: 'URL Shortener',
        projectLink: 'https://github.com/binyamdawit/URL-Shortener',
        image: urlShort
    }
]

export const filterOptions = [
    {
        label: 'ALL',
        id: 1
    },
    {
        label: 'SIMPLE',
        id: 2
    },
    {
        label: 'INTERMEDIATE',
        id: 3
    },
    {
        label: 'CAPSTONE',
        id: 4
    }
]