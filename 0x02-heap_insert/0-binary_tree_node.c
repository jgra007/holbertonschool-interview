#include "binary_trees.h"

/**
 *binary_tree_node - Making the initial node
 *@parent: The parent node
 *@value: The value being stored in the node
 *Return: The returning the node
 */
binary_tree_t *binary_tree_node(binary_tree_t *parent, int value)
{
    /*Structure pointer*/
    binary_tree_t *New_node;

    /*Allocate memory*/
    New_node = malloc(sizeof(binary_tree_t));

    /*Validate if it is null*/
    if (New_node == NULL)
        return (NULL);

    /*Add node*/
    New_node->left = New_node->right = NULL;
    New_node->n = value;
    New_node->parent = parent;

    return (New_node);
}