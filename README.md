# ansible_dynamic_inventory
steps for ansible dynamic invertory

To install it, use: ansible-galaxy collection install amazon.aws
To use it in a playbook, specify: amazon.aws.aws_ec2

Pre-requisite:
 - Install AWS_CLI & configure on ansible master machine
 - The below requirements are needed on the local controller node that executes this inventory.
    python >= 3.6
    boto3 >= 1.16.0
    botocore >= 1.19.0
    


## USE SAMPLE DYNAMIC INVENTORY FILE
To list matching machine with same tag from AWS which uses boto3 
 $ ansible-inventory -i aws_ec2.yml --list
 
To use pem file to test ping
 $ ansible aws_ec2 -i aws_ec2.yml -m ping --private-key=abc.pem
 
Steps to NOT use pem file
  * on node machine
    - enable passwdauth in /etc/ssh/sshd_config
    - restart sshd.service
    - sudo passwd <default username> or create user with its password
  * on ansible master
    - $ ssh-keygen
    - $ ssh-copy-id <username_of_node_m/c>@<ip_of_node>
    - enter user password for given username to copy id_rsa.pub file 
  
  $ ansible aws_ec2 -i aws_ec2.yml -m ping
 
 $ ansible-playbook aws_ec2 -i aws-ec2.yml master_playbook.yml --private-key=abc.pem


