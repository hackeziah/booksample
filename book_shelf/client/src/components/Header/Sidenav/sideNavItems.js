import React from 'react'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SideNavItem = () => {
    const items = [
        {
            type: 'navItem',
            icon: 'home',
            text: 'Home',
            link: '/',
            rettricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My Profile',
            link: '/user',
            rettricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add Admins',
            link: '/user/register',
            rettricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Login',
            link: '/login',
            restricted: false,
            exclude: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My reviews',
            link: '/user/user-reviews',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add reviews',
            link: '/user/add',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'fa-sign-out  ',
            text: 'Logout',
            link: '/user/logout',
            restricted: true
        }

    ]
    showItem = () => {
        items.map(item, i => {
            <div key={i} className={item.type}>
                <Link to={item.link}>
                    <FontAwesome name={item.icon}>
                        {item.text}
                    </FontAwesome>
                </Link>
            </div>
        })
    }
    return (
        <div>
            {showItem()}
        </div>
    );

};
export default SideNavItem
