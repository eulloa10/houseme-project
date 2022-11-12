from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        email='demo@aa.io', password='password')
    demo1 = User(
        email='demo1@aa.io', password='password')
    demo2 = User(
        email='demo2@aa.io', password='password')
    demo3 = User(
        email='demo3@aa.io', password='password')
    demo4 = User(
        email='demo4@aa.io', password='password')
    demo5 = User(
        email='demo5@aa.io', password='password')
    demo6 = User(
        email='demo6@aa.io', password='password')


    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
